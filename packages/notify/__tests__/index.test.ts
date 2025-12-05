import {describe, expect, jest, test} from '@jest/globals';

import notify from '../src/index';


describe('notify', () => {
  test("验证 on", async() => {
    const testNotify = notify();
    const fn = jest.fn();
    testNotify.on(fn);
    expect(fn).toHaveReturnedTimes(0);
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
    testNotify.notify();
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(3);
  });
  test("验证 off", async() => {
    const testNotify = notify();
    const fn = jest.fn();
    const offFn = testNotify.on(fn);
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
    offFn();
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
  });
  test("验证 once", async() => {
    const testNotify = notify();
    const fn = jest.fn();
    testNotify.once(fn);
    expect(fn).toHaveReturnedTimes(0);
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
    testNotify.notify();
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
  });
  test("验证 once", async() => {
    const testNotify = notify();
    const fn = jest.fn();
    const offFn = testNotify.once(fn);
    expect(fn).toHaveReturnedTimes(0);
    offFn();
    testNotify.notify();
    testNotify.notify();
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(0);
  });
  test("验证 clear", async() => {
    const testNotify = notify();
    const fn = jest.fn();
    testNotify.on(fn);

    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
    testNotify.clear();
    testNotify.notify();
    testNotify.notify();
    testNotify.notify();
    expect(fn).toHaveReturnedTimes(1);
  });
});
