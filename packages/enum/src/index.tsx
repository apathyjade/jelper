/*
 * @Author: 玉珏 <wxy252905@alibaba-inc.com>
 * @Version: 0.0.1
 * @Date: 2022-06-06 11:07:49
 * @Last Modified by:   玉珏
 * @Last Modified Time: 2022-06-06 11:07:49
 */

export type EnumItem<T = Record<string, any>> = {
  label: string;
  key: string;
  value?: any;
} & T;

export class EnumHelper<T extends EnumItem = EnumItem> {
  protected data: T[] = [];
  constructor(list: T[]) {
    this.data = list;
  }
  public valueOf() {
    return this.data;
  }
  public getData() {
    return this.data;
  }
  public get(key: string, value?: any ): T | undefined {
    if (value === undefined) {
      return this.getData().find(it => it.key === key);
    }
    return this.getData().find(it => it[key] === value);
  }
  public getLabel(key: string): string | undefined {
    return this.get(key)?.label;
  }
  public getValue(key: string): EnumItem['value'] | undefined {
    return this.get(key)?.value;
  }
  static build<T = {}, U = {}>(data: Array<EnumItem<T>>, expand?: U ): (EnumHelper<EnumItem<T>> & U) {
    return Object.assign(new EnumHelper<EnumItem<T>>(data), expand);
  }
}

export default EnumHelper;
