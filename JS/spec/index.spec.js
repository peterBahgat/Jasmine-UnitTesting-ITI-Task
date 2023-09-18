const { MathUtils, obj, sayHelloWorld } = require('../index .js');

describe('MathUtils', () => {
  let math;

  beforeEach(() => {
    math = new MathUtils();
  });

  // Test cases for the sum method
  it('should calculate the sum of two positive numbers', () => {
    expect(math.sum(5, 3)).toBe(8);
  });

  it('should calculate the sum of a positive and a negative number', () => {
    expect(math.sum(5, -3)).toBe(2);
  });

  it('should calculate the sum of two negative numbers', () => {
    expect(math.sum(-5, -3)).toBe(-8);
  });

  it('should calculate the sum of zero and a number', () => {
    expect(math.sum(0, 5)).toBe(5);
  });

  // Test cases for the subtract method
  it('should calculate the subtraction of two positive numbers', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });

  it('should calculate the subtraction of a positive and a negative number', () => {
    expect(math.subtract(5, -3)).toBe(8);
  });

  it('should calculate the subtraction of two negative numbers', () => {
    expect(math.subtract(-5, -3)).toBe(-2);
  });

  it('should calculate the subtraction of zero and a number', () => {
    expect(math.subtract(0, 5)).toBe(-5);
  });

  // Test cases for the multiply method
  it('should calculate the product of two positive numbers', () => {
    expect(math.multiply(5, 3)).toBe(15);
  });

  it('should calculate the product of a positive and a negative number', () => {
    expect(math.multiply(5, -3)).toBe(-15);
  });

  it('should calculate the product of two negative numbers', () => {
    expect(math.multiply(-5, -3)).toBe(15);
  });

  it('should calculate the product of zero and a number', () => {
    expect(math.multiply(0, 5)).toBe(0);
  });

  // Test cases for the divide method
  it('should calculate the division of two positive numbers', () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  it('should calculate the division of a positive and a negative number', () => {
    expect(math.divide(10, -2)).toBe(-5);
  });

  it('should handle division by zero', () => {
    expect(() => math.divide(5, 0)).toThrowError('Division by zero');
  });

  // Test cases for the average method
  it('should calculate the average of two positive numbers', () => {
    expect(math.average(5, 3)).toBe(4);
  });

  it('should calculate the average of a positive and a negative number', () => {
    expect(math.average(5, -3)).toBe(1);
  });

  // Test cases for the factorial method
  it('should calculate the factorial of a positive integer', () => {
    expect(math.factorial(5)).toBe(120);
  });

  it('should return 1 for factorial of 0', () => {
    expect(math.factorial(0)).toBe(1);
  });

  it('should throw an error for factorial of a negative number', () => {
    expect(() => math.factorial(-5)).toThrowError(
      'There is no factorial for negative numbers'
    );
  });
});

describe('obj', () => {
  it('should return "hello" when calling the hello method', () => {
    expect(obj.hello()).toBe('hello');
  });

  it('should return "world" when calling the world method', () => {
    expect(obj.world()).toBe('world');
  });
});

describe('sayHelloWorld', () => {
  it('should return "hello world"', () => {
    expect(sayHelloWorld(obj)).toBe('hello world');
  });

  it('should return "hello world" when passing an object with other methods', () => {
    const customObj = {
      hello: function () {
        return 'hello';
      },
      world: function () {
        return 'world';
      },
      extra: function () {
        return 'extra';
      },
    };

    expect(sayHelloWorld(customObj)).toBe('hello world');
  });
});
