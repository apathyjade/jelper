/*
 * @Author: 玉珏 <wxy252905@alibaba-inc.com>
 * @Version: 0.0.1
 * @Date: 2022-06-06 11:07:49
 * @Last Modified by:   玉珏
 * @Last Modified Time: 2022-06-06 11:07:49
 */

export interface EnumItem {
  label: string;
  key: string;
  value?: number | string | boolean | null;
  [prop: string]: any;
}

class EnumHelper<T extends EnumItem = EnumItem> {
  protected data: T[] = [];
  constructor(list: T[]) {
    list.forEach((it) => {
      if (!it) {
        return;
      }
      Object.freeze(it)
      this.data.push(it)
    });
  }
  getList() {
    return this.data;
  }
  get(key: string, value?: any ): T | undefined {
    if (value === undefined) {
      return this.getList().find(it => it.key === key);
    }
    return this.getList().find(it => it[key] === value);
  }
  getLabel(key: string): string | undefined {
    return this.get(key)?.label;
  }
}

export default EnumHelper;
