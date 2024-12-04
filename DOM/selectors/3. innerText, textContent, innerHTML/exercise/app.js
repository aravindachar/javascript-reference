// 1. Check the innerText of "first" element
let first = document.querySelector(".first");
console.log(first.innerText);
// 2. Check the textContent of "second" element
let second = document.querySelector(".second");
console.log(second.textContent);
// 3. Check the innerHTML of "third" element
let third = document.querySelector(".third");
console.log(third.innerHTML);

// change the value
third.innerText ="the man is real";
third.innerHTML="<h1> i am aravinda</h1>"

