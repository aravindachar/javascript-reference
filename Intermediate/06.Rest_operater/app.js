// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

let user = (...data)=>{
    console.log(...data);
}

console.log(user('araivnda','achar','kambar','sandur'));

let person=(name , age , ...hobbies)=>{
    console.log(`hello ${name}`);
    console.log(`hello ${age}`);
    console.log(`hello ${hobbies}`);
}
let vinay = person("aravinda",20,'karate','dance','singer');

console.log(vinay);

