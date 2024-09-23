let operator = '';
let currentOperation = '';
let result = 0;

function addNumber(number) {
    currentOperation += number;
    screenRefresh(currentOperation);
}

function addOperation(operation) {
    if (currentOperation !== '') {
        operator = operation;
        currentOperation += operation;
        screenRefresh(currentOperation);
    }
}

function calc() {
    try {
        result = eval(currentOperation);
        screenRefresh(result);
        currentOperation = result.toString();
    } catch (e) {
        screenRefresh('Error');
        currentOperation = '';
    }
}

function cls() {
    currentOperation = '';
    operator = '';
    result = 0;
    screenRefresh(0);
}

function screenRefresh(value) {
    document.getElementById('result').innerHTML = value;
}

