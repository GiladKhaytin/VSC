// Js date

let currentDate = new Date ();
console.log(currentDate);

let hour = currentDate.getHours ();
let min = currentDate.getMinutes ();
console.log(`${hour}:${min}`);

console.log(currentDate.toLocaleDateString('default', {weekday: 'long'}));

// Js math

let num1 = Math.random().toFixed(1)*10;
let num2 = Math.random().toFixed(1)*10;
let num3 = Math.random().toFixed(1)*10;

console.log(num1, num2, num3);

let max = Math.max(num1, num2, num3);
console.log(max);

// Practice Date

let currentDate1 = new Date();
console.log(currentDate1.getFullYear());

let hour1 = currentDate1.getHours();
let Minutes1 = currentDate1.getMinutes();
console.log(`${hour1}:${Minutes1}`);

// Practice Concat

const Name = "Ohad";
const Name2 = " Gross";

console.log(Name.concat(Name2));
