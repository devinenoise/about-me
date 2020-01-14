import isYes from '/src/isYes.js';

const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('total');
const lowTotal = document.getElementById('lowtotal');

function myPercent(count) {
    return Math.floor((count / 3) * 100);
}

quizButton.addEventListener('click', () => {
    const name = prompt("What\'s your name?");
    const confirmation = confirm(`Hello, ${name}, are you ready to take the quiz?`);
    //if they press cancel the quiz closes
    if (confirmation === false) return;
    //questions
    const answer1 = prompt("Did I live in Montana?");
    const answer2 = prompt("Is one of my kids named Roger?");
    const answer3 = prompt("Do I like music?");
    const farewell = confirm(`Ok, ${name}, the quiz is complete.  Click OK to see your results on the page!`);
    //define the count
    let count = 0;
    //increment the count +1 if correct
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;
    //defines percentage function as a variable
    let myPercentagePoints = myPercent(count);
    //if answers all 3 correct display "Great Job", else display "You can do better"
    if (count === 3) {
        total.textContent = `Great job ${name}, you got ${count}/3 answers correct! That's ${myPercentagePoints}%`;
    } else {
        lowTotal.textContent = `You can do better ${name}, you got ${count}/3 answers correct! That's ${myPercentagePoints}% `;
    }
});
