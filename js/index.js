const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
const operatorChar = ['+', '-', '*', '/'];
digits.forEach(btn => btn.addEventListener('click', digitPressed));

function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;

}

function isOperatorChar(str) {
    return (str == '+' || str == '-' || str == '*' || str == '/')
}

const opers = document.querySelectorAll('.opers button');
opers.forEach(btn => btn.addEventListener('click', operPressed));

function operPressed(e) {
    e.preventDefault();
    let lastChar = display.value.length - 1;
    if (isOperatorChar(display.value.charAt(lastChar))) {
        display.value = display.value;
    }
    else {
        display.value += e.target.innerText;
    }
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
    if (display.value == Infinity) {
        display.value = "Don`t do this!";
    }
}
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearPressed);

function clearPressed(e) {
    e.preventDefault();
    display.value = '';
}
const radical = document.querySelector('.radical').addEventListener('click', radicalPressed);

function isNumeric(val) {
    return (!isNaN(parseFloat(val)) && isFinite(val)) || val == '.';
}

function radicalPressed(e) {
    e.preventDefault();
    let res = '';
    let inputFirstPart = '';
    for (let ind = display.value.length - 1; ind >= 0; ind--) {

        if (isNumeric(display.value.charAt(ind))) {
            res = display.value.charAt(ind) + res;
        }
        else {
            inputFirstPart = display.value.substring(0, ind + 1);
            break;
        }
    }
    display.value = inputFirstPart + Math.sqrt(res);
}
const sup = document.querySelector('.sup').addEventListener('click', supPressed);

function supPressed(e) {
    e.preventDefault();
    let res = '';
    let inputFirstPart = '';
    for (let ind = display.value.length - 1; ind >= 0; ind--) {

        if (isNumeric(display.value.charAt(ind))) {
            res = display.value.charAt(ind) + res;
        }
        else {
            inputFirstPart = display.value.substring(0, ind + 1);
            break;
        }
    }
    display.value = inputFirstPart + res * res;
}
