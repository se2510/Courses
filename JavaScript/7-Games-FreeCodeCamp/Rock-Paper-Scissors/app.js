// 
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice; // Se declara aquí para que sea global.
let computerChoice
let result

// Obteniendo todas las posibles opciones de todos los botones.
const possibleChoices = document.querySelectorAll('button');

// Cuando se hace click en alguna opción, deseamos que algo pase (el EventListener)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // Cuando se hace click, se quiere el ID
    userChoice = e.target.id; // se guarda el id en la variable "userChoice"
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // su longitud es 3 (tres botones)
    // console.log(randomNumber); Se usó para verificar que si saque numeros aleatorios del 1 al 3

    if(randomNumber === 1 ) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2 ) {
        computerChoice = 'scissors';
    }
    if(randomNumber === 3 ) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice){
        result = 'It\'s a draw!'
    }

    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win! :D';
    }

    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lose! :C';
    }

    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win! :D';
    }

    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lose! :C';
    }

    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win! :D';
    }

    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You win! :D';
    }

    resultDisplay.innerHTML = result;
}