let inputFieldElem = document.querySelector('.input')
let guessBtnElement = document.querySelector('.guessbtn')
let messageElem = document.querySelector('.message')
let successElem = document.querySelector('.success')
let newGame = document.querySelector('.new')
let randomNumber = Math.ceil((Math.random() * 100))

function guessGame() {
    console.log(randomNumber);
    if (inputFieldElem.value == 0) {
        messageElem.innerHTML = 'Please input your guess number'
    }
    else if (inputFieldElem.value < 1 || inputFieldElem.value > 100) {
        messageElem.innerHTML = 'The number you entered is out of range'
    }
    else if (inputFieldElem.value > randomNumber) {
        messageElem.innerHTML = 'Your guess is too high'
    } else if (inputFieldElem.value < randomNumber) {
        messageElem.innerHTML = 'Your guess is too low'
    } else {
        successElem.innerHTML = `You have guessed ${randomNumber} correctly`
        newGuess()

    }


    setTimeout(function () {
        messageElem.innerHTML = '';
        successElem.innerHTML = ''
        newGame.innerHTML = '';

    }, 3000);
    inputFieldElem.value =''

}

function newGuess() {
    setTimeout(function () {

        newGame.innerHTML = 'New game has started!!!'

        randomNumber = Math.ceil((Math.random() * 100))


    }, 5000);

    // setTimeout(function () {

    //     newGame.innerHTML = '';




    // }, 3000);
}


guessBtnElement.addEventListener('click', guessGame)

