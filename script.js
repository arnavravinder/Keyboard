const display = document.getElementById('display');

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        if (key.classList.contains('backspace')) {
            display.textContent = display.textContent.slice(0, -1);
        } else if (key.classList.contains('spacebar')) {
            display.textContent += ' ';
        } else {
            display.textContent += key.textContent;
        }
    });
});
