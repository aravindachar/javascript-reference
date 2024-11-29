// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// traditinal method
function greet(name){
    console.log(`hello ${name}`);
}
greet('aravinda');

// Arrrow function
let greet = (namee)=> `hello ${aravinda}`;


const double = (number) => number * 2;
console.log(double(5));

// Exersixe

// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

setTimeout(()=>{console.log("hello")
    setTimeout(()=>{console.log("hey")
        setTimeout(()=>{console.log("namste")
            setTimeout(() => {
               console.log('hey') 
            },2000)
        },2000);
    },2000);
},200);