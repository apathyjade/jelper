
import path from 'path';
export default {
  async resolve(name: string) {
    // @ts-ignore
    return path.dirname(await import.meta.resolve(`${name}/package.json`))
  }
}
