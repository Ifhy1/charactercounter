const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxChars = 50;

textInput.addEventListener('input', function() {
    let inputText = textInput.value;

    if (inputText.length > maxChars) {
        inputText = inputText.substring(0, maxChars);
        textInput.value = inputText;
    }

    const currentLength = inputText.length;
    charCount.textContent = `Character Count: ${currentLength}/50`;

    if (currentLength === maxChars) {
        charCount.style.color = 'red'; 
    } else {
        charCount.style.color = '#5e4c72'; 
    }
});
