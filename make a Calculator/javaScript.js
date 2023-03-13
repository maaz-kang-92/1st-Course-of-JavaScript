let num1 = parseInt(prompt("Enter the first Number"));    //parseInt is used to convert the string or prompt value into integer because prompt always takes a string...
let num2 = parseInt(prompt("Enter the second Number"));

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let totalValue = document.getElementById("totalValue-el");

function add() {
    let addValue = num1+num2;
    totalValue.textContent = totalValue.textContent + addValue;
}

function subtract() {
    let subValue = num1-num2;
    totalValue.textContent = totalValue.textContent + subValue;

}

function divide() {
    let divValue = num1/num2;
    totalValue.textContent = totalValue.textContent + divValue;

}

function multiply() {
    let mulValue = num1*num2;
    totalValue.textContent = totalValue.textContent + mulValue;

}
