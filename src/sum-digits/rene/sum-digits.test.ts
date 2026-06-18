import { DigitRoot } from './sum-digits';

describe('DigitRoot', () => {
    it('38 → 2 (3+8=11, 1+1=2)', () => {
      expect(DigitRoot.iterative(38)).toBe(2);
      expect(DigitRoot.mathematical(38)).toBe(2);
    });
}