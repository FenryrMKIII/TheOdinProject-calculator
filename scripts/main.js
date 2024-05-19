let first_value=undefined;
let second_value=undefined
let operator = undefined
let power_state = false

// Select all buttons with the 'numbers' class
let buttons = document.getElementsByClassName('numbers_button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    let number_entered = this.textContent;
    if (power_state) {
    update_state(number_entered);
    refresh_display(this.textContent);
  } else {
     }
  }
}

function assignFunctionToButton(classOrId, label, func) {
  if (classOrId === 'class') {
    let button = document.getElementsByClassName(label);
    button.onclick = function () {
      func();
    }
  }
  else {
    let button = document.getElementById(label);
    button.onclick = function() {
      func();
    }
    }}

// assign math operators function
let operators_dict = {
  'add': add,
  'subtract': substract,
  'multiply': multiply,
  'divide': divide
};

for (let key in operators_dict) {
  let button = document.getElementById(key);
  button.onclick = function() {
    operator = operators_dict[key]()
  }
}

// assign operate function
let button = document.getElementById('equals');
button.onclick = function() {
  operate();
};

function get_display() {
  return document.getElementById('display');
}

function refresh_display() {
  let display = get_display();
  if (!power_state) {
    return
  }
    if (operator === undefined) {
      if (first_value === undefined) {
        display.value = '0';
      } else {
        display.value = first_value;
      }
    }

    else {
      if (second_value === undefined) {
        display.value = '0';
      } else {
        display.value = second_value;
      }
    }
  }

function power_on(){
  power_state = !power_state;

  if (power_state) {
    console.log('Calculator is on');
    refresh_display();
  }
  else {
    console.log('Calculator is off');
    first_value = undefined;
    second_value = undefined;
    operator = undefined;
    get_display().value = ''
  }}

function update_state(a) {
  if (operator === undefined) {
    if (first_value === undefined) {
      first_value = a;
    } else {
      first_value = first_value + a;
    }
  }
  else if (second_value === undefined) {
    second_value = a;
  }
  else {
    second_value = second_value + a;
  }
}

function add() {
  return first_value + second_value;
}

function multiply() {
  return first_value + second_value;
}

function substract() {
  return first_value + second_value;
}

function divide() {
  return first_value + second_value;
}

function operate() {
  let operations_dict = {'add': add(), 'multiply': multiply(), 'substract': substract(), 'divide': divide()}
  operations_dict[operator](first_value, second_value)
}

assignFunctionToButton('id', 'power_on', power_on);
assignFunctionToButton('id', 'equals', operate);
assignFunctionToButton('id', 'equals', add);

console.log(first_value)
console.log(second_value)
console.log(operator)
