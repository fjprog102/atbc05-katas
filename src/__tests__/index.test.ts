import { greet } from '../index';

describe('greet function', () => {
  it('should greet with the provided name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should work with different names', () => {
    expect(greet('Student')).toBe('Hello, Student!');
  });
});
