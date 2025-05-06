document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = ["Web Design", "Web Dev", "Web Content"];
    let index = 0;
    let count = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === typewriterText.length) {
            count = 0;
        }
        currentText = typewriterText[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typewriter').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause for 2 seconds after each word
        } else {
            setTimeout(type, 200);
        }
    }());
});