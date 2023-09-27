document.getElementById("paragraph"). innerHTML = "Just a few words";

["He is not Good", "If you want so..."].forEach(alert);

function Robot(value) {
    if (value%2 == 0) {
        console.log("Robot");
    } else {
        console.log("Not Robot");
    }
}
Robot(true);

/*function num(value) {
    if (value%2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
num(5);*/

/**
 * 
 * @param {number} num1 The number to raise
 * @param {number} num2 The power to be raised by
 * @returns 
 */
function power(num1, num2) {
    return Math.pow(num1, num2);
}
console.log( power(5, 3) ); //5X5X5= 125