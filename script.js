let display = document.getElementById('display');
let calculation = '';

function updateDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = calculation;
}

function backspace() {
   calculation = calculation.slice(0, -1);
   display.value = calculation;
   document.querySelector('.calculator').style.setProperty('--bg-color', '#cec3c1');
}

function calculate() {
    try {
        let result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
       display.value = 'Error';
       document.querySelector('.calculator').style.setProperty('--bg-color', '#E76261');
       calculation = '';
    }
}

function errorColor() {

}
