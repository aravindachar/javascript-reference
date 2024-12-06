// classlist
// add()
// remove()
// toggle()

// const header = document.querySelector("h1");
// class list allows youto manage the css classes of and element

// console.log(header.classList);


// console.log(header.style.color = "black");


// add function used to add the stylesheet class 
// header.classList.add("styles");

// remove did the visavers of the add 
// header.classList.remove("styles");
// toggle tag used change the tag ecactly opprsite like => id the tag is added it is removed if its not present its add 
// header.classList.toggle("styles");


console.log(document.getElementsByTagName("h1"));

const btn = document.querySelector("h1");
const btnn = document.querySelector('#my-btn');
console.log(btn.classList);

btnn.addEventListener('click', e=> {
    btn.classList.add('styles');
  })



  