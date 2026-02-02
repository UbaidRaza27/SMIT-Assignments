var display = document.getElementById('display');


function Num_Opr(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

        display.value = eval(display.value);
}