import { EnumHelper } from '../src/index.ts';

describe('enum', () => {
  test("test", () => {
    const result = new EnumHelper([
      { label: '测试1', key: 'test1', value: false }
    ]);
    expect(result.get('test1')).toBeDefined();
  });
});
