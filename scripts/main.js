let memory = undefined;
let current_value="0";
let power_state = false

// Select all buttons with the 'numbers' class
let buttons = document.getElementsByClassName('numbers');

// Loop through each button
for (let i = 0; i < buttons.length; i++) {
  // Add an 'onclick' event listener to each button
  buttons[i].onclick = function() {
    // Call the read_input function with the button's text as argument
    read_input(this.textContent);
  };
}

let button = document.getElementById('power_on');

// Assign the onclick function
button.onclick = function() {
  power_on();
};

function power_on() {
  power_state = !power_state;
  if (power_state) {
  let inputElement = document.getElementById('display');
  inputElement.value = current_value;}
  else {
    let inputElement = document.getElementById('display');
    inputElement.value = "";
  }}

function read_input(a) {
  if (current_value === "0") {
    current_value = a;
  } else {
    current_value = current_value + a;
  }
}

function add(memory, b) {
  let result;

  if (memory !== undefined) {
    result = memory + b;
  } else {
    result = "memory is not defined"
  }
  return result;
}

function assign_memory(a) {
  memory = a;
}
