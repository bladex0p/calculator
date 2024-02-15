

const display = document.querySelector('#display');


function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay() {
    display.value = " ";

}

function clearOne() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    let newValue = currentValue.substring(0, currentValue.length - 1);
    display.value = newValue;

}

function calculate() {
    display.value = eval(display.value);

}