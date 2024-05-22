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
      update_display(number_entered, this.className);
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

function update_display(value, caller) {
  let display = get_display();

  if (caller === 'numbers_button') {
    if (display.value === '0') {
      display.value = value;
    } else {
      display.value = display.value + value;
    }
  }

  else {
    display.value = value;
  }
}


function power_on(){
  power_state = !power_state;

  if (power_state) {
    console.log('Calculator is on');
    update_display('0', 'power_on');
  }
  else {
    console.log('Calculator is off');
    update_state()
    update_display('', 'power_on')
  }}

function update_state(a) {
  if (a===undefined) {
    first_value = undefined;
    second_value = undefined;
    operator = undefined;
  }

  else if (operator === undefined) {
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

function add_display() {
  operator = 'add'
  update_display('0')
}

function add(a,b) {
  return parseInt(a) + parseInt(b);
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
  let operations_dict = {'add': add, 'multiply': multiply, 'substract': substract, 'divide': divide}
  let result = operations_dict[operator](first_value, second_value)
  update_display(result, 'operate')


}

function clear() {
  update_state()
  update_display('0', 'clear');
}

assignFunctionToButton('id', 'power_on', power_on);
assignFunctionToButton('id', 'equals', operate);
assignFunctionToButton('id', 'add', add_display);
assignFunctionToButton('id', 'clear', clear);


console.log(first_value)
console.log(second_value)
console.log(operator)
