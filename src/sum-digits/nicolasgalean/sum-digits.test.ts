import { describe, expect, test } from '@jest/globals';
import { DigitRoot } from './sum-digits';

describe('DigitRoot Calculator', () => {
  
  describe('Test cases and constraints', () => {
    test('Using README example', () => {
      expect(DigitRoot.iterative(38)).toBe(2);
      expect(DigitRoot.mathematical(38)).toBe(2);
      expect(DigitRoot.iterative(9875)).toBe(2);
      expect(DigitRoot.mathematical(9875)).toBe(2);
    });

    test('Must return the same number if it is a single digit', () => {
      expect(DigitRoot.iterative(9)).toBe(9);
      expect(DigitRoot.mathematical(9)).toBe(9);
    });

    test('Must handle 0', () => {
      expect(DigitRoot.iterative(0)).toBe(0);
      expect(DigitRoot.mathematical(0)).toBe(0);
      expect(DigitRoot.iterativeWithSteps(0)).toEqual({ result: 0, steps: 0 });
    });
    
    test('Must handle negative numbers using absolute value', () => {
      expect(DigitRoot.iterative(-38)).toBe(2);
      expect(DigitRoot.mathematical(-38)).toBe(2);
      expect(DigitRoot.iterativeWithSteps(-38)).toEqual({ result: 2, steps: 2 });
    });

    test('Must register 0 steps for single-digit numbers', () => {
      expect(DigitRoot.iterativeWithSteps(9)).toEqual({ result: 9, steps: 0 });
    });

    test('Must register multiple iterations correctly', () => {
      expect(DigitRoot.iterativeWithSteps(38)).toEqual({ result: 2, steps: 2 });
      expect(DigitRoot.iterativeWithSteps(9875)).toEqual({ result: 2, steps: 3 });
    });
    
  });
});

  /*describe('README constraints', () => {
    test('Must calculate the digit root of 38 (3+8=11 -> 1+1=2)', () => {
      expect(DigitRoot.iterative(38)).toBe(2);
      expect(DigitRoot.mathematical(38)).toBe(2);
    });

    test('Must calculate the digit root of 9875', () => {
      expect(DigitRoot.iterative(9875)).toBe(2);
      expect(DigitRoot.mathematical(9875)).toBe(2);
    });
  });*/

  /*describe('Constraints', () => {
    test('Must handle negative numbers using the absolute value', () => {
      expect(DigitRoot.iterative(-38)).toBe(2);
      expect(DigitRoot.mathematical(-38)).toBe(2);
    });

    test('Must validate the mutual consistency with large numbers', () => {
      const numeroGrande = 999999999999;
      expect(DigitRoot.iterative(numeroGrande)).toBe(DigitRoot.mathematical(numeroGrande));
    });
  });*/

  /*describe('Contador de Pasos (Steps)', () => {
    test('Must register 0 steps for single-digit numbers', () => {
      expect(DigitRoot.iterativeWithSteps(9)).toEqual({ result: 9, steps: 0 });
    });

    test('Must register multiple iterations correctly', () => {
      expect(DigitRoot.iterativeWithSteps(9875)).toEqual({ result: 2, steps: 3 });
    });
  });*/
