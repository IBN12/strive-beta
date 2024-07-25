import { userDeck } from "../GameProg/UserDeck";
import { ShuffleCards } from "../GameProg/ShuffleCards";

// ShuffleCardsContent(): The main shuffle cards content section.
export function ShuffleCardsContent(){
    DisplayShuffledCards();
    ShuffleButton();
    StartGame(); 
}

// DisplayShuffledCards(): Will display the shuffled cards in the deck. 
function DisplayShuffledCards(){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content');

    const displayShuffledCards = document.createElement('div');
    displayShuffledCards.classList.add('display-shuffled-cards'); 

    shuffleCardsContent.appendChild(displayShuffledCards); 
}

// ShuffleButton(): The main shuffle button.
function ShuffleButton(){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content');

    const shuffleButton = document.createElement('button');
    shuffleButton.textContent = "Shuffle"; 

    shuffleButton.addEventListener('click', ShuffleInitiatorCards); 

    shuffleCardsContent.appendChild(shuffleButton); 
}

// ShuffleInitiatorCards(): Will call the Shuffle Cards Game Prog function. 
function ShuffleInitiatorCards(){
    userDeck.length = 0; // Reset the userDeck for until the user reaches 3 shuffles. 
    ShuffleCards(); 
}

// StartGame(): The start game button.
function StartGame(){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content');

    const startGameButton = document.createElement('button');
    startGameButton.textContent = "Start Game"; 

    shuffleCardsContent.appendChild(startGameButton);
}