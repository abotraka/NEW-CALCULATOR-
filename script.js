// script.js
let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousInput = "";
  display.innerText = "0";
}

function appendNumber(number) {
  if (currentInput === "0" && number === "0") return; // منع تكرار 0 في البداية
  currentInput += number;
  display.innerText = currentInput;
}

function chooseOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "خطأ" : prev / curr;
      break;
    default:
      return;
  }

  currentInput = result;
  operator = null;
  previousInput = "";
  display.innerText = result;
}
