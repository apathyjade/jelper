/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-07-06 17:11:58
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-07-06 17:11:58
 */

import { execSync } from 'child_process';
import chalk from 'chalk';
import semver from 'semver';

(async () => {
  const packages = await getPackageList();
  const result = { total: packages.length, published: 0, skipped: 0, failed: 0 };
  const allPackageProcess = packages.map(async (item) => mainProcess(item, result));
  await Promise.all(allPackageProcess)
  dealResult(result);
})().catch((err) => {
  console.log(chalk.red(err.message));
  process.exit(1);
});

async function dealResult(result) {
  console.log(`\n` +
    `${chalk.blue(`Publish summary: Total packages: ${result.total}`)}\n` +
    `Published: ${chalk.green((result.published))}\n` +
    `Skipped: ${chalk.yellow((result.skipped))}\n` +
    `Failed: ${chalk.red((result.failed))}\n`
  );
  if (result.failed > 0) {
    console.log(chalk.red(`${result.failed} packages failed to publish.`));
    process.exit(1);
  } else {
    console.log(chalk.green('All packages successfully!'));
    process.exit(0)
  }
}

async function mainProcess(item, result) {
  try {
    const isShouldSkippe = !(await shouldPulish(item));
    if (isShouldSkippe) {
      result.skipped += 1;
      return;
    }
  } catch (err) {
    console.log(err, result)
    console.error(err.message);
    result.failed += 1;
    return
  }
  console.log('');
  console.log(chalk.blue(`--- Publishing package ${item.name}@${item.version} ---`));

  publishPackage(item).then(() => {
    console.log(chalk.green(`Successfully published ${item.name}@${item.version}`));
    result.published += 1;
  }).catch((err) => {
    console.error(err.message);
    result.failed += 1;
  });
}

async function shouldPulish(pkg) {
  // 1️⃣ 格式必须合法
  if (!semver.valid(pkg.version)) {
    throw new Error(`❌ package ${pkg.name} 非法版本格式: "${pkg.version}"`);
  }

  // 2️⃣ 获取远程所有版本
  let remoteVersions = [];
  try {
    const remoteVersionsStr = execSync(`npm view ${pkg.name} versions --json`, {
      cwd: process.cwd(),
      stdio: 'pipe',
      encoding: 'utf8',
      env: { ...process.env }
    });
    remoteVersions = JSON.parse(remoteVersionsStr);
    if (!Array.isArray(remoteVersions)) {
      throw new Error(`code "npm view ${pkg.name} versions --json" 格式化结果测试错误`);
    };
  } catch (err) {
    if (
      err.message.includes('code E404') ||
      err.message.includes('404 Not Found') ||
      err.message.includes('not in the npm registry')
    ) { // npm 未发布，通过校验
      return true;
    }
    throw new Error(`❌ 无法获取远程版本: ${err.message}`);
  }

  // 3️⃣ 不能重复
  if (remoteVersions.includes(pkg.version)) {
    console.log(chalk.yellow(`${pkg.name} 跳过发布: ${pkg.version} npm registry 已经存在`));
    return false;
  }

  // 4️⃣ 关键：检查是否回退（同 major.minor 下不能小于任何已有版本）
  const currentMajorMinor = `${semver.major(pkg.version)}.${semver.minor(pkg.version)}`;
  
  // 找出所有同 major.minor 的已发布版本
  const sameBranchVersions = remoteVersions.filter(v => {
    if (!semver.valid(v)) return false;
    const vm = `${semver.major(v)}.${semver.minor(v)}`;
    return vm === currentMajorMinor;
  });

  if (sameBranchVersions.length > 0) {
    // 找出同分支中最大的版本
    const maxExisting = sameBranchVersions.reduce((max, v) =>
      semver.gt(v, max) ? v : max
    );

    // 新版本必须 >= 最大已有版本（注意：>= 在 SemVer 中是合理的）
    if (semver.lt(pkg.version, maxExisting)) {
      throw new Error(
        `❌ 禁止回退！package ${pkg.name} 同分支 (${currentMajorMinor}) 已有更高版本: ${maxExisting}，当前 ${pkg.version} 更小`
      );
    }
  }
  return true;
}

async function getPackageList() {
  try {
    const pkgsStr = execSync('rush list --json', {
      cwd: process.cwd(),
      stdio: 'pipe',
      encoding: 'utf8',
      env: { ...process.env }
    });
    return JSON.parse(pkgsStr).projects.filter(pkg => pkg.shouldPublish);
  } catch(err) {
    throw new Error(`❌ Failed to list Rush packages: ${err.message}`)
  }
}

async function publishPackage (pkg) {
  try {
    execSync(`npm publish --provenance --access public`, {
      cwd: pkg.fullPath,
      stdio: 'inherit',
      env: { ...process.env }
    });
  } catch (error) {
    throw new Error(`❌ Failed to publish package ${pkg.name}@${pkg.version}: ${err.message}`);
  }
};
