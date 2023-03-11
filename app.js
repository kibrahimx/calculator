const previousInput = document.querySelector('#previous-input');
const currentInput = document.querySelector('#current-input');

let previousNumber = '';
let currentNumber = '';
let operator = '';

document.querySelector('#equalBtn').addEventListener('click', calculate);

function calculate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    
    switch (operator) {
        case '+':
            previousNumber = previousNumber + currentNumber;
            currentInput.textContent = previousNumber;
            break;
        case '-':
            previousNumber = previousNumber - currentNumber;
            currentInput.textContent = previousNumber;
            break;
        case 'x':
            previousNumber = previousNumber * currentNumber;
            currentInput.textContent = previousNumber;
            break;
        case '÷':
            previousNumber = previousNumber / currentNumber;
            currentInput.textContent = previousNumber;
            break;
    };
    previousInput.textContent = '';
};

document.querySelectorAll('.digitBtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (currentNumber.length <= 11) {
            currentNumber += e.target.textContent;
            currentInput.textContent = currentNumber;
        };
    });
});

document.querySelectorAll('.operatorBtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = e.target.textContent;
        previousNumber = currentNumber;
        previousInput.textContent = `${previousNumber} ${operator}`;
        currentNumber = '';
        currentInput.textContent = '';
    });
});

document.querySelector('#clearBtn').addEventListener('click', () => {
    previousInput.textContent = '';
    currentInput.textContent = '';
    previousNumber = '';
    currentNumber = '';
    operator = '';
});

document.querySelector('#pointBtn').addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        currentInput.textContent = currentNumber;
    };
});

document.querySelector('#deleteBtn').addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    currentInput.textContent = currentNumber;
});