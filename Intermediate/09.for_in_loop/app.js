// the for in loop in javscpript is used to iterate over the enumrable properties of an object,It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}
let person ={
    name : 'aravinda',
    age:17,
    geneder:'male'
};

for(let key in person){
    console.log(key, person[key]);

}



let list = ["one","two","three","four"];
for(let index in list){
    console.log(index , list[index]);
}
// Iterate over object & log the property and the value of that object using for in loop.
const object = {a:1,b:2,c:3};
for(let key in object){
    console.log(key);
}

// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};
let sum =0;
let sub = 0 ;
for(let keys in testScores){
    
    sum += testScores[keys] ;
    sub++;
    
}
console.log(sum);