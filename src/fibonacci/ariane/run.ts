import {FibonacciGenerator} from "./fibonacci";
const Fib_0 = new FibonacciGenerator(0, 1);
const Fib_1 = new FibonacciGenerator(2, 1);
const Fib_2 = new FibonacciGenerator(5, 3);

console.log(Fib_0.getNthIterative(10));
console.log(Fib_1.getNthRecursive(8));
Fib_1.clearCache();
console.log(Fib_2.getNthRecursive(1));
Fib_2.clearCache();
console.log(Fib_2.getNthRecursive(2));
Fib_2.clearCache();