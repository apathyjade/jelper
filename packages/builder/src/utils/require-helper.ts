
import path from 'path';
import { fileURLToPath } from 'url';
export default {
  async resolve(name: string) {
    try {
      // @ts-ignore
      const fullPath = await import.meta.resolve(`${name}/package.json`);
      // @ts-ignore
      return path.dirname(fileURLToPath(fullPath));
    } catch(e) {
      // @ts-ignore
      const resolvedUrl = await import.meta.resolve(name);
      const fullPath = fileURLToPath(resolvedUrl);
      let pkgDir = path.dirname(fullPath);
      while (!pkgDir.endsWith('node_modules')) {
        pkgDir = path.dirname(pkgDir);
      }
      console.log(path.join(pkgDir, name));
      return path.join(pkgDir, name);
    }
  }
}
