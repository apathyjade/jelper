
import path from 'path';
import { fileURLToPath } from 'url';
export default {
  async resolve(name: string) {
    // @ts-ignore
    const fullPath = await import.meta.resolve(`${name}/package.json`);
    // @ts-ignore
    return path.dirname(fileURLToPath(fullPath));
  }
}
