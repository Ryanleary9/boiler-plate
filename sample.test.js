import { add } from './sample';

describe('Given add function', () => {
  test('When given 1 + 1 should give 2', () => {
    const c = 1;
    const b = 3;
    const expected = 4;
    const r = add(c, b);
    expect(r).toBe(expected);
  });
});
