// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. 
// These enhancements make it more convenient and concise to define object properties and methods

let user=(name, age , work)=>{
    name , age , work , 
    hobbies=()=>{ 
        console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);}
}
let aravinda = user('aravinda',22,'softwareengineer');
console.log(aravinda);

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code
const a = 1,b=2,c=3,d=4;
obj = {a,b,c,d};

// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------

let getPersionES6=(namee,age,height)=>{namee,age,height};

let aravindaa = getPersionES6('arainvda',23,'doctor');
console.log(aravindaa);