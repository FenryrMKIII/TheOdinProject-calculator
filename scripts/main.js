let displayed_value=undefined;
let memorized_value=undefined
let operator = undefined
let last_keystroke = undefined
let power_state = false



function log_everyting() {
  console.log(`displayed value = ${displayed_value}`)
  console.log(`memorized value = ${memorized_value}`)
  console.log(`operator = ${operator}`)
    console.log(`last keystroke = ${last_keystroke}`)
}

function get_display() {
  return document.getElementById('display');
}

function button_pressed(button) {
  log_everyting()

  let display = get_display();
  let operators = ['add', 'subtract', 'multiply', 'divide']

  if (button.className === 'numbers_button') {

    if (last_keystroke !== 'numbers_button') {
      memorized_value = displayed_value;
      displayed_value = parseInt(button.textContent);
    } else {
      displayed_value = parseInt(display.value + button.textContent);

    }
  } else if (button.id === 'power_on') {
    if (!power_state) {
      power_state = !power_state;
      console.log('Calculator is on');
      displayed_value = 0;

    } else {
      power_state = !power_state;
      console.log('Calculator is off');
      displayed_value = undefined;
    }
  }

    else if (button.id === 'equals') {
        displayed_value = operate(memorized_value, displayed_value, operator);
      operator = undefined;
        memorized_value = undefined;
    }
   else if (operators.includes(button.id)) {
    if (memorized_value !== undefined) {
      operator = button.id;
      displayed_value = operate(memorized_value, displayed_value, operator);
      memorized_value = undefined;
    } else {
      operator = button.id;
    }
  }

  last_keystroke = button.className;
  display.value = displayed_value
  log_everyting()

}


function add(a,b) {
  return a + b;
}

function multiply() {
  return displayed_value + memorized_value;
}

function substract() {
  return displayed_value + memorized_value;
}

function divide() {
  return displayed_value + memorized_value;
}

function operate(a,b,operator) {
  let operations_dict = {'add': add, 'multiply': multiply, 'substract': substract, 'divide': divide}
  return operations_dict[operator](a,b)
}

Array.from(document.getElementsByClassName('numbers_button')).forEach(button => {
  button.onclick = function() {
    button_pressed(this);
  }
});

function assignFunctionToButton(classOrId, label, func) {
  if (classOrId === 'class') {
    let button = document.getElementsByClassName(label);
    button.onclick = function () {
      func(this);
    }
  }
  else {
    let button = document.getElementById(label);
    button.onclick = function() {
      func(this);
    }
  }}

assignFunctionToButton('id', 'power_on', button_pressed);
assignFunctionToButton('id', 'equals', button_pressed);
assignFunctionToButton('id', 'add', button_pressed);
assignFunctionToButton('id', 'clear', button_pressed);

// module.exports = {add, multiply, substract, divide};
