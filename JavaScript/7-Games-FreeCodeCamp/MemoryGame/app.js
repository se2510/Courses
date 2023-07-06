// Necesitamos crear 12 cartas

const cardArray = [ // Arreglo de objetos
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
];

/*
console.log(cardArray)
Se hizo para verificar que efectivamente, es un arreglo de objetos
*/

// Ahora para mezclarlos aleatoriamente, se usa el método sort() de JS
cardArray.sort(() => 0.5 - Math.random());
/* El método sort() compara dos valores y luego los mezcla.
Entonces Math.random() devuelve un número  desde 0 hasta 1, y luego 
mezcla las cartas dependiendo de si es positivo o negativo. Por eso el
0.5, para tener desde -0.5 a 0.5, y que tenga las mismas posibilidades :D

console.log(cardArray) // Hecho para ver que si mezclaba el array.
*/

const gridDisplay = document.querySelector('#grid'); // El # indica que se busca el ID de grid en todo el documento HTML
// console.log(gridDisplay); Hecho para ver que puso el div
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    // Para cada objeto del array se crea un elemento
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement('img');
        // console.log(card, i ); Se ve que crea el elemento imagen en la consola de la página.
        card.setAttribute('src', 'images/blank.png'); // A cada carta se le asigna la fuente en blanco
        // console.log(card); Se ve src en la terminal del elemento.
        card.setAttribute('data-id',i);
        // console.log(card,i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }

}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same card! xd');
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match! :D');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        // Ahora quitando la posibilidad de darle click a la carta:
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again :p');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'Congrats!, you found them all C:';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2 ){
        setTimeout(checkMatch , 500); // Llama a la  funcion checkMatch y luego pausa 500 ms
    }
}