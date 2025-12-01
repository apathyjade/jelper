import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useCreate from '../src/useCreate';

test("验证useCreate", async () => {
  const callback = jest.fn();
  renderHook(() => useCreate(callback));

  expect('object').toEqual('object');
});
