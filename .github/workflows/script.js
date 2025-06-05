let currentInput = '';
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (currentOperation !== null) {
        calculate();
    }
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculate() {
    let result;
    const prev = parseFloat(currentInput);
    if (isNaN(prev) || currentOperation === null) return;
    switch (currentOperation) {
        case '+':
            result = prev + parseFloat(currentInput);
            break;
        case '-':
            result = prev - parseFloat(currentInput);
            break;
        case '*':
            result = prev * parseFloat(currentInput);
            break;
        case '/':
            result = prev / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
