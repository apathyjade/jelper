#!/usr/bin/env node
// common/scripts/publish-with-npm.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 🔧 配置：是否只发布特定包（留空则发布所有）
const TARGET_PACKAGES = ['component']; // e.g. ['core', 'utils'] or [] to publish all

// 📁 计算项目根目录（从 common/scripts/ 上两级）
const repoRoot = path.resolve(__dirname, '../..');
const packagesDir = path.join(repoRoot, 'packages');

if (!fs.existsSync(packagesDir)) {
  console.error(`❌ packages directory not found: ${packagesDir}`);
  process.exit(1);
}

// 🔍 扫描所有子包
const allPackageFolders = fs.readdirSync(packagesDir).filter(name => {
  const pkgPath = path.join(packagesDir, name, 'package.json');
  return fs.existsSync(pkgPath);
});

// 🎯 确定要发布的包
let targetPackagesToPublish;
if (TARGET_PACKAGES.length > 0) {
  targetPackagesToPublish = TARGET_PACKAGES.filter(pkg =>
    allPackageFolders.includes(pkg)
  );
  const missing = TARGET_PACKAGES.filter(pkg => !allPackageFolders.includes(pkg));
  if (missing.length > 0) {
    console.warn(`⚠️  Warning: requested packages not found: ${missing.join(', ')}`);
  }
} else {
  targetPackagesToPublish = allPackageFolders;
}

if (targetPackagesToPublish.length === 0) {
  console.log('📭 No packages to publish.');
  process.exit(0);
}

console.log(`🔍 Found ${targetPackagesToPublish.length} package(s) to publish:`);
targetPackagesToPublish.forEach(pkg => console.log(`  - ${pkg}`));

// 🚀 逐个发布
for (const pkgName of targetPackagesToPublish) {
  const pkgDir = path.join(packagesDir, pkgName);
  const pkgJson = require(path.join(pkgDir, 'package.json'));
  console.log(`\n📦 Publishing ${pkgJson.name}@${pkgJson.version}`);

  try {
    execSync('npm publish --provenance --access public', {
      cwd: pkgDir,
      stdio: 'inherit',
      env: { ...process.env }
    });
  } catch (err) {
    console.error(`💥 Failed to publish ${pkgJson.name}:`, err.message);
    process.exit(1);
  }
}

console.log('\n✅ All packages published successfully!');