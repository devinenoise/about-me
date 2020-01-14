import isYes from '/src/isYes.js';

const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('total');
const lowTotal = document.getElementById('lowtotal');

quizButton.addEventListener('click', () => {
    const name = prompt("What\'s your name?");
    const confirmation = confirm(`Hello, ${name}, are you ready to take the quiz?`);
    if (confirmation === false) return;
    const answer1 = prompt("Did I live in Montana?");
    const answer2 = prompt("Is one of my kids named Roger?");
    const answer3 = prompt("Do I like music?");
    const farewell = confirm(`Ok, ${name}, the quiz is complete.  See your results!`)
    //define the count
    let count = 0;
    //increment the count +1 if correct
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;
    //define total number of questions
    const answerTotals = 3;
    //if answers more than 2 correct display "Great Job", else display "Try Again"
    if (count >= 2) {
        total.textContent = `Great job ${name}, you got ${count}/${answerTotals} answers correct!`;
    } else {
        lowTotal.textContent = `Try again ${name}, you got ${count}/${answerTotals} answers correct!`;
    }
});
