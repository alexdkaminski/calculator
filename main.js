// Operation functions

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

// Operate function

function operate(a,operator,b) {
    if (operator === '*') {
        return multiply(a,b);
    }
    if (operator === '/') {
        return divide(a,b);
    }
    if (operator === '+') {
        return add(a,b);
    }
    if (operator === '-') {
        return subtract(a,b);
    }
}

// UI Elements

const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.getElementById('clear')

let numberJoined;
let numberArray = [];
let operatorArray = [];
let operator;
let a;
let b;

// Press number function

function pressNumber(number) {
    numberArray.push(number);
    numberJoined = numberArray.join('');
    display.innerHTML = numberJoined;

}

// Press operator function

function pressOperator(operator) {
    
    if (display.innerHTML !== '0') {
        // Do we have a and b?
        if (!a){
            a = parseInt(numberJoined);
            numberArray = [];
        } else {
            b = parseInt(numberJoined);
            numberArray = [];
        }

        if (operator == '=') {
        } else {
            operatorArray.push(operator);
        }

        useOperator = operatorArray[0];
        console.log("a: " + a); 
        console.log("operator: " + useOperator);
        console.log("b: " + b);

        if (a && b) {
            result = operate(a,useOperator,b);
            display.innerHTML = result;
            a = result;
            b = '';
            useOperator = ''
            numberJoined = ''
            if (useOperator !== "=") {
                operatorArray.shift()
            }
        }
    }
}

function clearDisplay() {
    display.innerHTML = '0';
    a = '';
    b = '';
    numberArray = [];
    operatorArray = [];
    operator = '';
    numberJoined = '';
}

// Add click event listener to all operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click',function(e){
        let operator = e.target.innerHTML;
        pressOperator(operator);
    })
}

// Add click event listener to all numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',function(e){
        let number = parseInt(e.target.innerHTML);
        pressNumber(number);
    })
}

// Add click event listener to clear button
clear.addEventListener('click',function(){
    clearDisplay();
})