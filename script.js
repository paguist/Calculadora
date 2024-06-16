var displayDiv = document.querySelector("#display");
var currentInput = "0";
var firstValue = null;
var operator = null;
var shouldResetDisplay = false;

function press(num) {
    if (shouldResetDisplay) {
        currentInput = "" + num;
        shouldResetDisplay = false;
    } else {
        currentInput = currentInput === "0" ? "" + num : currentInput + num;
    }
    displayDiv.innerText = currentInput;
}

function setOP(op) {
    if (firstValue === null) {
        firstValue = parseFloat(currentInput);
    } else if (operator) {
        firstValue = calculate();
    }
    operator = op;
    shouldResetDisplay = true;
}

function clr() {
    currentInput = "0";
    firstValue = null;
    operator = null;
    shouldResetDisplay = false;
    displayDiv.innerText = currentInput;
}

function calculate() {
    if (operator === null || shouldResetDisplay) {
        return parseFloat(currentInput);
    }

    var secondValue = parseFloat(currentInput);
    var result = 0;

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
    }

    displayDiv.innerText = result;
    currentInput = "" + result;
    firstValue = null;
    operator = null;
    shouldResetDisplay = true;
    return result;
}