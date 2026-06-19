import { DigitRoot } from './sum-digits';

describe('DigitRoot Calculator', () => {

  describe('README Examples', () => {
    it('should return 2 for input 38', () => {
      expect(DigitRoot.iterative(38)).toBe(2);
      expect(DigitRoot.mathematical(38)).toBe(2);
    });

    it('should return 2 for input 9875', () => {
      expect(DigitRoot.iterative(9875)).toBe(2);
      expect(DigitRoot.mathematical(9875)).toBe(2);
    });

    it('should return 9 for input 9', () => {
      expect(DigitRoot.iterative(9)).toBe(9);
      expect(DigitRoot.mathematical(9)).toBe(9);
    });

    it('should return 0 for input 0', () => {
      expect(DigitRoot.iterative(0)).toBe(0);
      expect(DigitRoot.mathematical(0)).toBe(0);
    });

    it('should return 2 for input -38 (negative numbers)', () => {
      expect(DigitRoot.iterative(-38)).toBe(2);
      expect(DigitRoot.mathematical(-38)).toBe(2);
    });
  });

});
