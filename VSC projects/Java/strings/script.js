let d = "";
let s = '';
let b = ``;

let speech = "Martin Luther King said: 'I have a dream'";
console.log(speech);

let tip = "We can escape quotes by using \\";
console.log(tip);

/*How to Concatenate Strings*/

let First = "I am learning";
let Second = "Java Script";
let Result = First + ' ' + Second;

console.log(Result);

let First2 = "I am learning";
let Second2 = "Java Script";
let Result2 = First2.concat(Second2);

console.log(Result);

// Template Literals

const firstname = "Gilad";
const course = "Java Script";
const channel = "Dev Dreamer";

let info = `${firstname} is learning ${course} with ${channel}`;

console.log(info);

// String methods

let x = "I am watching Dev Dreamer";
console.log(x.toUpperCase());
console.log(x.slice(14 , 25));