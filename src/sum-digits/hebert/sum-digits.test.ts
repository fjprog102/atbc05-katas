import { DigitRoot } from "./sum-digits";

describe("Iterative should be equal to mathemathical", () => {
    const casos = [38, 9875, 9, 0, -38, 987598759875];
    casos.forEach((caso) => {
        it("Iterative an mathemathical result should be equal for " + caso, () => {
            expect(DigitRoot.iterative(caso)).toBe(DigitRoot.mathematical(caso));
        });
    });

});

describe("Use cases", () => {
    it("should return 2 for 38", () => {
        expect(DigitRoot.mathematical(38)).toBe(2);
    });
    it("should return 2 for 9875", () => {
        expect(DigitRoot.mathematical(9875)).toBe(2);
    });
    it("should return 9 for 9", () => {
        expect(DigitRoot.mathematical(9)).toBe(9);
    });
    it("should return 0 for 0", () => {
        expect(DigitRoot.mathematical(0)).toBe(0);
    });
    it("should return 2 for -38", () => {
        expect(DigitRoot.mathematical(-38)).toBe(2);
    });
    it("should return the sum of the digits of a number with trailing zeros", () => {
        expect(DigitRoot.mathematical(12300)).toBe(6);
    });
    it("should return the sum of the digits of a number with zeros in between", () => {
        expect(DigitRoot.mathematical(102030)).toBe(6);
    });
    it("should return the sum of the digits of a large number", () => {
        expect(DigitRoot.mathematical(123456789)).toBe(9);
    });
    it("should return the sum of the digits of a large number", () => {
        expect(DigitRoot.mathematical(987598759875)).toBe(6);
    });
});