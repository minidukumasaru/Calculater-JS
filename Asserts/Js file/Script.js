let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function appendCharacter(char) {
    if (display.innerText === '0') display.innerText = char;
    else display.innerText += char;
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
