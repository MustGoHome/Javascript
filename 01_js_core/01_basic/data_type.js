'use strict';

// Variable
let n = 123;
n = 12.345;

// Infinity
console.log(1 / 0);
console.log(Infinity);

// NaN
console.log("Isn't number" / 2);
console.log("Isn't number" / 2 + 5);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// String
let name = 'John';
console.log(`Hello, ${name}`);
console.log(`The result is ${1 + 2}`);

// Bool
let isGreater = 4 > 1;
console.log(isGreater);

// Null
let ageNull = null;
console.log(ageNull);

// Undefined
let ageUndefined;
console.log(ageUndefined);

// Type
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof 'foo');
console.log(typeof Symbol('id'));

// Type: object
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console);
