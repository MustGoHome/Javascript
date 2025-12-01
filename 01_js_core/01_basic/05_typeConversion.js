'use strict';

// Conversion: Boolean -> String
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// Conversion: String -> Integer
let str = '123';
console.log(typeof str);

str = Number(str);
console.log(typeof str);

// NaN
let age = Number('Random string: 123');
console.log(age);

// undefined -> NaN
console.log(Number(undefined));

// null -> 0
console.log(Number(null));

// true and false -> 1 and 0
console.log(Number(true));

// Conversion: Boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));