import { userDeck } from "../GameProg/UserDeck";
import { ShuffleCards } from "../GameProg/ShuffleCards";
import { userMainTools } from "../GameProg/UserMainTools";

/** |ShuffleCardsContent() Manual|
 *  For 'controls' Parameter:
 * controls = 0 => Reseting the entire shuffle cards content to display 
 * a new amount of user shuffles. 
 * 
 * controls = 1 => Resetings the shuffle button, amount of shuffles displayed, and start button
 * once the shuffle limit has been reached. User will still be able to press the button, but the 
 * animation will be initiated after each shuffle button press to indicate that the limit has 
 * been reached. 
*/

// ShuffleCardsContent(): The main shuffle cards content section.
export function ShuffleCardsContent(controls){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content'); 
    const shuffleButton = document.querySelector('.shuffle-cards-content > button:nth-child(2)'); 
    const displayNumberOfShuffles = document.querySelector('.display-number-of-shuffles');
    const startButton = document.querySelector('.shuffle-cards-content > button:nth-child(4)'); 

    if (controls === 0)
    {
        shuffleCardsContent.replaceChildren(); 

        DisplayShuffledCards();
        ShuffleButton();
        DisplayNumberOfShuffles(); 
        StartGame(); 

    }
    else if (controls === 1)
    {
        shuffleCardsContent.removeChild(shuffleButton);
        shuffleCardsContent.removeChild(displayNumberOfShuffles); 
        shuffleCardsContent.removeChild(startButton); 

        ShuffleButton();
        DisplayNumberOfShuffles(); 
        StartGame(); 
    }
    else if (controls === null)
    {
        DisplayShuffledCards();
        ShuffleButton();
        DisplayNumberOfShuffles(); 
        StartGame(); 
    }
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
    if (!userMainTools.endShuffles)
    {
        userDeck.length = 0; // Reset the userDeck for until the user reaches 3 shuffles. 
        ShuffleCards(); 
        ShuffleCardsContent(0); // Reset For: 0 => Displaying the Number of Shuffles. 
    }
    else 
    {
        ShuffleCardsContent(1); // Reset For: 1 => Shuffle limit has been reached.
    }
}

// DisplayNumberOfShuffles(): Will display the number of shuffles the user has made. 
function DisplayNumberOfShuffles(){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content'); 
    
    const displayNumberOfShuffles = document.createElement('div');
    displayNumberOfShuffles.classList.add('display-number-of-shuffles'); 

    displayNumberOfShuffles.textContent = `Shuffles: ${userMainTools.numOfShuffles}`; 

    if (userMainTools.numOfShuffles >= 3)
    {
        displayNumberOfShuffles.classList.add('shuffle-limit-reached'); 
        userMainTools.endShuffles = true; 
    }
    else 
    {
        userMainTools.numOfShuffles++; 
    }

    shuffleCardsContent.appendChild(displayNumberOfShuffles); 
}

// StartGame(): The start game button.
function StartGame(){
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content');

    const startGameButton = document.createElement('button');
    startGameButton.textContent = "Start Game"; 

    shuffleCardsContent.appendChild(startGameButton);
}