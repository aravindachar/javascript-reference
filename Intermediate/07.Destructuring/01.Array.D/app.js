// destrucure 
// nothing but allows us to 'UNPACK' values from data-strucutre into sepatrare distict variables 

const nums = ['one','two','three','four'];

const [one , two , three , four , five]= nums ;
console.log(one);
console.log(two);
console.log(three);
console.log(five); //it gives undefined values

// defalut values
let a , b ;
[a=32 ,b=34]=[1];

//swapping variable 
let c = 1;
let d = 2;

[c , d] = [d , c];
console.log(c);
console.log(d);

const arr=[23,45,67];
[arr[0] , arr[1]] = [arr[1],arr[0]];
console.log(arr);


const colors = ["red", "green", "blue", "yellow", "orange"];

// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.

// After extracting the colors, log each variable's value to the console.

const [color1, color2, color3] = colors;
console.log(color1, color2, color3);