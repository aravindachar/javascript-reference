// bakswas fellow study something saddism
// the spread operator is a new addition to the set of operatrs is javascript
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

const max = Math.max(2,3,4,5,6,4,3,22);
const min = Math.min(2,3,4,5,6,4,3,22);
console.log(max);

// spread basically take the elemets and expands into new element

console.log(Math.max(...nums));

// spread the objects
const obje1 = {x:2, U:2};
console.log(...obje1);


// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

let arr = [1, 2, 3];
let arr2 = [4, 5];

console.log(...arr , ...arr2);