// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// concise way of writing conditional ecpressions 
// takes three oprands 
// condition ? exprIfTrue : exprIfFalse;


let password = 23;

passwordchek = (password)=>{
    if(password===8){
        return "strong password"
    }else{
        return "password shoul be 8"
    }``
}

or 
passwordchekTernamri = (password) =>{
    return password ===8 ? "strong password" : "funking weak passwords";
}


console.log(passwordchek);
console.log(passwordchekTernamri);

// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);
let age = 23 ;
age >= 18 ? "You are eligible to vote":"you are still a childuu";

let a = 4 ;
// check if its positive if positive greater than 2 or not
let res = a >=0 ? (a >=2 ? 'its greater than 2':'no its not greater than 2'):"its not positive";
console.log(res);