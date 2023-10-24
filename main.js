function burgermenu(){
    const shown = document.querySelector('.sidebar')
    shown.style.display = 'flex'
}
function quittemenu(){
    const shown = document.querySelector('.sidebar')
    shown.style.display = 'none'
}
const questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});



