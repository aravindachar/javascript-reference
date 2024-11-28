// KJSON stand for java script object Noataion, it is light weight data interchange format that is easy for human 
// to read and easy maching

// java scrpit provide methods to work with JSON

//JSON.stringfy() : Converts a Javascript object into a JSON string
//JSON.parse()    : parses a JSON string and return a Javascrpit object

const person = {
    name :'aravinda',
    age :'20',
    job:'software engineer',
    email:'aravindachar@gmail.com'
}
// lets conver the object
const jsonstring = JSON.stringify(person);
console.log(jsonstring);

// {
//     "name" :"aravinda",
//     "age" :"20",
//     "job":"software engineer",
//     "email":"aravindachar@gmail.com"
// }

