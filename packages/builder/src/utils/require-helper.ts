
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
export default {
  async resolve(name: string) {
    const modluePath = `../../node_modules/${name}`;
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const targetPath = path.resolve(__dirname, modluePath);
    return fs.realpathSync(targetPath);
  }
}
