import { add } from './sample';

describe('Given add function', () => {
  test('When given 1 + 1 should give 2', () => {
    const a = 1;
    const b = 3;
    const expected = 4;
    const r = add(a, b);
    expect(r).toBe(expected);
  });
});
