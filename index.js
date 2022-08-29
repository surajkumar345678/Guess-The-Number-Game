console.log('Exercise 1: *Guess The Number Game*\n');

let guessNumber = Number.parseInt(prompt('Please enter a number between 0-100 : '));

let randomNumber = Math.floor(Math.random() * 100);

let chances = 1;

while (guessNumber != randomNumber) {
    if (guessNumber > randomNumber) {
        console.log('You guessed a greater number. Try smaller number than ' + guessNumber + '.\n');
    } else if (guessNumber < randomNumber) {
        console.log('You guessed a smaller number. Try greater number than ' + guessNumber + '.\n');
    } else {
        console.log('You entered an invalid number.\nPlease enter a number between 0-100.\n');
    }
    chances++;
    guessNumber = Number.parseInt(prompt('Try again enter a number between 0-100'));
}

let score = 100 - chances;
console.log('You guessed the correct number ' + randomNumber + ' in ' + chances + ' chances.');
console.log('Chances : ' + chances);
console.log('Actual Number : ' + randomNumber);
console.log('Your Score : ' + score);