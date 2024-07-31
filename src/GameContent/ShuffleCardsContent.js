import { userDeck } from "../GameProg/UserDeck";
import { ShuffleCards } from "../GameProg/ShuffleCards";
import { userMainTools } from "../GameProg/UserMainTools";

import closeButton from '../images/tools/window-close.svg'; 

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

    for (let i = 0; i < 4; i++)
    {
        const card = document.createElement('div'); 
        displayShuffledCards.appendChild(card); 
        if (userDeck.length === 0)
        {
            card.textContent = 'No Card'; 
        }
        else 
        {
            card.textContent = `${userDeck[i].name}`;
            card.addEventListener('click', ViewCard); 
        }
    }

    shuffleCardsContent.appendChild(displayShuffledCards); 
}

// ShuffleCardsAnimation(): Produces an animation for the displayShuffledCards() when the user shuffles card. 
function ShuffleCardsAnimation(){
    const displayShuffledCards = document.querySelectorAll('.display-shuffled-cards > div');

    displayShuffledCards.forEach((card, index) => {
        switch(index){
            case 0:
                card.classList.add('shuffle-card-animation'); 
                setTimeout(() => {card.classList.remove('shuffle-card-animation');}, 1000);
                break;
            case 1:
                setTimeout(() => {card.classList.add('shuffle-card-animation');}, 1000);
                setTimeout(() => {card.classList.remove('shuffle-card-animation');}, 2000); 
                break;
            case 2:
                setTimeout(() => {card.classList.add('shuffle-card-animation');}, 2000);
                setTimeout(() => {card.classList.remove('shuffle-card-animation');}, 3000);
                break;
            case 3:
                setTimeout(() => {card.classList.add('shuffle-card-animation');}, 3000);
                setTimeout(() => {card.classList.remove('shuffle-card-animation');}, 4000); 
                break;
            default:
                return; 
        }
    });
}

// ViewCard(): Allows the user to view the card. 
function ViewCard(e){
    const content = document.getElementById('content'); 
    const shuffleButton = document.querySelector('.shuffle-cards-content > button:nth-child(2)'); 
    const startButton = document.querySelector('.shuffle-cards-content > button:nth-child(4)');
    const displayShuffledCards = document.querySelector('.display-shuffled-cards');
    
    displayShuffledCards.classList.add('no-clicks');  
    shuffleButton.disabled = true;
    startButton.disabled = true; 

    const viewCard = document.createElement('div'); 
    viewCard.classList.add('view-card'); 
    viewCard.classList.add('open-view-card');

    const closeButtonContainer = document.createElement('div'); 
    const closeButtonImage = document.createElement('img');
    closeButtonImage.alt = 'View Card Close Button'; 
    closeButtonImage.src = closeButton; 
    closeButtonImage.addEventListener('click', CloseViewCard); 

    const cardDescriptionContainer = document.createElement('div'); 
    const cardName = document.createElement('div');
    cardName.textContent = e.target.textContent;

    viewCard.appendChild(closeButtonContainer);
    viewCard.appendChild(cardDescriptionContainer); 
    closeButtonContainer.appendChild(closeButtonImage); 
    cardDescriptionContainer.appendChild(cardName); 
    content.appendChild(viewCard); 
}

// CloseViewCard(): Will close the view card window. 
function CloseViewCard(e){
    const content = document.getElementById('content');
    const shuffleButton = document.querySelector('.shuffle-cards-content > button:nth-child(2)');
    const startButton = document.querySelector('.shuffle-cards-content > button:nth-child(4)');
    const displayShuffledCards = document.querySelector('.display-shuffled-cards'); 
    const viewCard = document.querySelector('.view-card');
    viewCard.classList.remove('open-view-card'); 
    viewCard.classList.add('close-view-card'); 

    shuffleButton.disabled = false;
    startButton.disabled = false; 

    setTimeout(() => {content.removeChild(viewCard);}, 500); 
    setTimeout(() => {displayShuffledCards.classList.remove('no-clicks');}, 700); 
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
        const shuffleButton = document.querySelector('.shuffle-cards-content > button:nth-child(2)');
        shuffleButton.disabled = true; 

        const startButton = document.querySelector('.shuffle-cards-content > button:nth-child(4)');
        startButton.disabled = true; 

        userDeck.length = 0; // Reset the userDeck for until the user reaches 3 shuffles. 

        ShuffleCards(); 

        ShuffleCardsAnimation();

        // WGO: Give the 'shuffle card animation' time to perform for at least 4 seconds
        // and then 'reset the shuffle cards content section' to display a new amount of
        // shuffles. 
        setTimeout(() => {
            ShuffleCardsContent(0); // Reset For: 0 => Displaying the Number of Shuffles. 
        }, 5000);
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