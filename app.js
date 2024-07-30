let sortedNumbersList = [];
let limitNumber = 20;
let secretNumber = generateRandomNumber();
let tries = 1;

function changeShownText(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Us English Female', {rate:1.2});
}

function showInitialMessage() {
    changeShownText('h1', 'Guess the secret number!');
    changeShownText('p', 'Choose a number between 1 and 20:');
}

showInitialMessage();

function verifyGuess() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        changeShownText('h1', 'You got it!!');
        let wordTried = tries > 1 ? 'tries' : 'try';
        let triesMessage = `You guessed the secret number with ${tries} ${wordTried}!`;
        changeShownText('p', triesMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            changeShownText('p', 'The secret number is smaller');
        } else {
            changeShownText('p', 'The secret number is bigger');
        }
        tries++;
        clearField();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let listLenght = sortedNumbersList.length;

    if (listLenght == limitNumber) {
        sortedNumbersList = [];
    }
    if (sortedNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        sortedNumbersList.push(chosenNumber);
        console.log(sortedNumbersList)
        return chosenNumber;
    }
}

function clearField() {
    chute = document.querySelector('input');
    chute.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    clearField();
    tries = 1;
    showInitialMessage();
    document.getElementById('restart').setAttribute('disabled', true)
}







