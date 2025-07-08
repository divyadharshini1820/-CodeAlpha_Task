const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.classList.contains('clear')) {
            currentInput = "";
            display.value = "";
        } else if (button.classList.contains('equal')) {
            try {
                currentInput = eval(currentInput.replace('%', '/100'));
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
