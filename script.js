let display = document.getElementById('display');
let calculation = '';

function updateDisplay(value) {
    document.querySelector('.calculator').style.setProperty('--bg-color', '#cec3c1');
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
        calculation = 'Quest: Complete!'
        display.value = calculation;
        return;
    }

    for (let i = 0; i < calculation.length; i++) {
        switch (calculation.charAt(i)) {
            case '+':
                calculation = addition(i);
                display.value = calculation;
                return;
            case '-':
                calculation = subtraction(i);
                display.value = calculation;
                return;
            case '*':
                calculation = multiplication(i);
                display.value = calculation;
                return;
            case '/':
                calculation = division(i);
                display.value = calculation;
                return;
            
        }
    }
    display.value = 'Error';
    document.querySelector('.calculator').style.setProperty('--bg-color', '#E76261');
    calculation = '';
}

function checkQuest() {
    let quests = ['In4', 'r34', ':3'];
    for(let i = 0; i < quests.length; i++) {
        if (calculation === quests[i])
            return true;
    }

    return false;
}   


let buttonCount = 0, customButtons = [];
function addButton() {
   let buttonText = display.value;
   if(buttonCount < 4) {
      //create button
      let newButton = document.createElement('button');
      //add class for styling
      newButton.className = 'button';
      //set text
      newButton.innerHTML = buttonText;
      //Set onclick function
      newButton.setAttribute('onclick', `displayCustom('${buttonText}')`);
      //append buttons to buttons container
      document.querySelector('.buttons').appendChild(newButton);
      customButtons.push(newButton);
   }else{
      customButtons[buttonCount % 4].innerHTML = buttonText;
      customButtons[buttonCount % 4].setAttribute('onclick', `displayCustom('${buttonText}')`);
   }

   buttonCount++;
   clearDisplay();
}


function displayCustom(buttonText) {
   updateDisplay(buttonText);
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

    if (days == 0) days = 1;

    let result = month_to_text.get(month).toString() + days.toString();

    console.log(result);

    return result;

}

function multiplication(index) {
    return '-1';
}

function division(index) {
   let operand1 = calculation.substring(0, index).trim();
   let operand2 = calculation.substring(index+1).trim();

   result = operand1.substring(operand2);

   return result;
}
