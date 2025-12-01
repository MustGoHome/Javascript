'use strict';

// Nullish coalescing operator
let firstName = null;
let lastName = null;
let nickName = 'Violet';

console.log(firstName ?? lastName ?? nickName);

// Diff '??' and '||;
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// sample
let x = null;
let y = null;
let area = (x ?? 100) * (y ?? 50);
console.log(area);