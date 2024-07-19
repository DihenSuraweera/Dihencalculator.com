document.getElementById("add").addEventListener("click", function() {
    calculate('+');
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate('-');
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate('*');
});

document.getElementById("divide").addEventListener("click", function() {
    calculate('/');
});

function calculate(operation) {
    let firstNumber = parseInt(document.getElementById("firstnumber").value);
    let secondNumber = parseInt(document.getElementById("secondnumber").value);
    let resultField = document.getElementById("result");

    let result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        if (secondNumber === 0) {
            resultField.value = 'Cannot divide by zero';
            return;
        }
        result = firstNumber / secondNumber;
    } else {
        result = 'Invalid operation';
    }

    resultField.value = result;
}

