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

    if (checkQuest()) {
        return;
    }

    for (let i = 0; i < calculation.length; i++) {
        switch (calculation.charAt(i)) {
            case '+':
                calculation = addition(i);
                return;
            case '-':
                calculation = subtraction(i);
                display.value = calculation;
                return;
            case '*':
                calculation = multiplication(i);
                return;
            case '/':
                calculation = division(i);
                return;
            
        }
    }
    display.value = 'Error';
    document.querySelector('.calculator').style.setProperty('--bg-color', '#E76261');
    calculation = '';
}

function checkQuest() {
    let quests = ['In4', 'r34'];
    for(let i = 0; i < quests.length; i++) {
        if (calculation === quests[i])
            return true;
    }

    return false;
}

function addition(index) {
    return '-1';
}


function subtraction(index) {
    let operand1 = calculation.substring(0, index).trim();
    let operand2 = calculation.substring(index+1).trim();

    console.log(operand1);
    console.log(operand2);

    let days = Math.abs((parseInt(operand1)- parseInt(operand2))) % 365;

    console.log(days);
    
    let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    let month = 0;
    while (days >= 0) {
        if ((days - monthDays[month]) < 0 ) {
            break;
        }
        days -= monthDays[month];
        month++;
    }
    month++;

    console.log(month);

    let month_to_text = new Map();
    month_to_text.set(1, 'Jan');
    month_to_text.set(2, 'Feb');
    month_to_text.set(3, 'Mar');
    month_to_text.set(4, 'Apr');
    month_to_text.set(5, 'May');
    month_to_text.set(6, 'Jun');
    month_to_text.set(7, 'Jul');
    month_to_text.set(8, 'Aug');
    month_to_text.set(9, 'Sep');
    month_to_text.set(10,'Oct');
    month_to_text.set(11,'Nov');
    month_to_text.set(12,'Dec');

    let result = month_to_text.get(month).toString() + days.toString();

    console.log(result);

    return result;

}

function multiplication(index) {
    return '-1';
}

function division(index) {
    return '-1';
}
