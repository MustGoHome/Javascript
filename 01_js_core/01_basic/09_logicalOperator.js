'use strict';

console.log(1 || 0);
console.log(null || 1);
console.log(undefined || null || 0);

// Short circuit evaluation
true || console.log('not printed');
false || console.log('printed');

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'Not thing');
