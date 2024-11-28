// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays


const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit",
  ];
  
  console.log(fruits);
  fruits.push("banana");
  console.log(fruits);
  fruits.pop();
  console.log(fruits);
  fruits.shift();
  console.log(fruits);
  fruits.unshift("orange");
  console.log(fruits);


// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array

let pl = ["JavaScript", "aravinda", "Python", "php"];
let numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("aravinda"));//true or flase value
console.log(pl.join("--")); //joins with the specifi tpye
console.log(pl.reverse());//reverse the array
console.log(pl.slice(0, 3));//solice 
console.log(pl.sort());