let inputFieldElem = document.querySelector('.input')
let guessBtnElement = document.querySelector('.guessbtn')
let messageElem = document.querySelector('.message')
let randomNumber = Math.ceil((Math.random() * 100))

function guessGame(){
    if(inputFieldElem.value < randomNumber) {
messageElem.innerHTML = 'Your guess is too high'
    }
}
guessBtnElement.addEventListener('click', guessGame)