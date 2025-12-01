'use strict';

// Unary operator
let x = 1;
x = -x;
console.log(x);

// Exponentiation operator
console.log(4 ** (1/2));
console.log(8 ** (1/3));

// '+' operator
console.log('1' + 2); // 12
console.log(2 + '1'); // 21
console.log(2 + 2 + '1'); // 41

console.log( 6 - '2'); // 4
console.log('6' / '2'); // 3

// Conversion: to Integer
console.log(+true); // 1
console.log(+""); // 0

let apples = '2', oranges = '3';
console.log(+apples + +oranges);

// Assignment operator
let a = 1, b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

// Comma operator
let z = (1 + 2, 3 + 4);
console.log(z); // 7

// Commma operator sample
for(a = 1, b = 3, c = a * b; a < 10; a++){
    console.log(`${a}, ${b}, ${c}`)
}