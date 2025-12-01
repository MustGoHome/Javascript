'use strict';

// prompt: if you click 'Cancel', null is returned
let age = +prompt('Input your age: ', 100);
// alert returns undefined
alert(`Your age is ${age}`);

// confirm: return bool
let isBoss = confirm('Are you boss?');
alert(isBoss);
