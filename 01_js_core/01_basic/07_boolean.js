'use strict';

console.log('2' > 1); // true
console.log('01' == 1); // true

let a = 0, b = "0";
console.log(Boolean(a)); // false
console.log(Boolean(b)); // true
console.log(a == b); // true

// Equality operator
console.log(0 == false); // true
console.log('' == false); // true
console.log(0 === false); // false

// null
console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // ture

// undefined
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false