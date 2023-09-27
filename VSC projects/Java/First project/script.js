
let currentNumber = 1;
let currentMultiplier = 1;

function showQuestion(){
    let questionString = "";
    for (let i = 1; i <=10; i++) {
    questionString += currentNumber + " x " + i + " = " + (currentNumber * i) + "<br>";
}
document.getElementById("Question").innerHTML = questionString;
}


function Checking() {
    const answer = Number(document.getElementById("Text").value);
    if (answer === (currentNumber * currentMultiplier)) {
      document.getElementById("Result").innerHTML = "Correct!";
      currentMultiplier++;
      if (currentMultiplier > 10) {
        currentNumber++;
        currentMultiplier = 1;
      }
      if (currentNumber <= 10) {
        document.getElementById("Text").value = "";
        showQuestion();
      }
       else {
        document.getElementById("Question").innerHTML = "Congratulations, you have completed the multiplication table!";
        document.getElementById("Text").style.display = "none";
        document.getElementsByTagName("Button")[0].style.display = "none";
        document.getElementById("Result").style.display = "none";
        
      }
    } else {
      document.getElementById("Result").innerHTML = "Incorrect, try again.";
    }
  }

  showQuestion();