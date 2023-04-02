var operator = "";
var operand1 = 0;
var operand2 = null;
var decimal = false;

function getNumber(number){
  console.log(number) // 7
  var result = document.getElementById("viewfinder")
  console.log(result)
  result.innerHTML += number
}

function getSymbol(symbol) {
  console.log(symbol); // +
  var result = document.getElementById("viewfinder");
  console.log(result);

  if (operator === "") {
    operator = symbol;
    operand1 = parseFloat(result.innerHTML);
    result.innerHTML = "";
  }
}

function calculate() {
  var result = document.getElementById("viewfinder")
  operand2 = parseFloat(result.innerHTML)
  var total = 0
  switch (operator) {
    case "+":
        total = operand1 + operand2;
        break;
    case "x":
        total = operand1 * operand2;
        break;
    case "-":
      total = operand1 - operand2;
      break;
    case "÷":
      total = operand1 / operand2;
      break;
    default:
        break;  
  }
  operator = "";
  operand1 = 0;
  operand2 = null;
  decimal = false;

  result.innerHTML = total
} 
