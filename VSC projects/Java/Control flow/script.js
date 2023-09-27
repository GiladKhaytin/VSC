// If else statements

// First
let num = 10 + 2;

if (num > 2 && num < 20) {
   console.log("TRUE")
} else {
   console.log ("FALSE")
};

// Second
let user = 'employee'

if (user === 'guest') {
   console.log('Login Denied')
} else if (user === 'employee') {
   console.log('Succesfully Logged In')
};

// Third
let myNmae = "Gilad" ;

if (myNmae > 5) {
   alert("More than 5")
} else if (myNmae = 5) {
   alert("Exactly 5 letters")
} else {
   alert ("less than 5 letters")
};

// Switch statements

// First
let favFood = 'Pizza';

switch(favFood) {
   case 'Hamburger':
      console.log(`Thats right! ${favFood} is my favorite`)
      break;
   case 'Shawarma':
      console.log(`Thats right! ${favFood} is my favorite`)
      break;
   case 'Pizza':
      console.log(`Thats right! ${favFood} is my favorite`)
      break;
   case 'Falafel':
      console.log(`Thats right! ${favFood} is my favorite`)
      break;
   case 'Humus':
      console.log(`Thats right! ${favFood} is my favorite`)
      break;
   default: 
      console.log ("Fav food not found... I'm hungry")
};