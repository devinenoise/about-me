import isYes from '/src/isYes.js';

const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('total');


quizButton.addEventListener('click', () => {
    const name = prompt("What\'s your name?");
    const confirmation = confirm("Are you sure you want to take the quiz?");
    if (confirmation === false) return;
    const answer1 = prompt("Did I live in Montana?");
    const answer2 = prompt("Is my kid named Roger?");
    const answer3 = prompt("Do I like music?");
    const farewell = confirm("The quiz is complete.  See your results!")
    let count = 0;
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;

    total.textContent = `${name}, you got ${count} answers correct!`;
});
