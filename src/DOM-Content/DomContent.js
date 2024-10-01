import { ShuffleCardsContent } from "../GameContent/ShuffleCardsContent";
import { MainMenuContent } from "../GameContent/MainMenuContent";

import inGameMenuImg from "../images/tools/menu.svg"; 
import closeWindowButtonImg from "../images/tools/window-close.svg"; 

// InitializeDOMContent(): Will initialize all the DOM Content. 
export function InitializeDOMContent(){
    MainMenuContentDOM();

    // Note: ShuffleCardsContentDOM(), LoadingRoomDOM(), and BattleArenaDOM() is included here for testing purposes. 
    // ShuffleCardsContentDOM(); 
    // LoadingRoomDOM(); 
    // BattleArenaDOM(); 
}

// MainMenu(): Main menu for the application.
export function MainMenuContentDOM(){
    const content = document.getElementById('content');

    const mainMenuContent = document.createElement('div'); 
    mainMenuContent.classList.add('main-menu-content'); 

    content.appendChild(mainMenuContent); 

    GameLogo();
    QuickGame();
    Settings();
    SoSuStudio();
}

function GameLogo(){
    const mainMenuContent = document.querySelector('.main-menu-content'); 

    const gameLogo = document.createElement('h1');
    gameLogo.textContent = 'STRIVE';

    mainMenuContent.appendChild(gameLogo); 
}

function QuickGame(){
    const mainMenuContent = document.querySelector('.main-menu-content');

    const quickGameButton = document.createElement('button');
    quickGameButton.textContent = 'Quick Game';

    // Note 1: This version is for testing purposes. You will need to comment out the quickGameButton 
    // under Note 2 if you use this version. ShuffleCardsContent() will be used in the index.js file. 
    // quickGameButton.addEventListener('click', () => {console.log('TO: ShuffleCardsContent()');});

    // Note 2: Quick Game Button will lead to the ActivateShuffleCardsContent
    // which will activate the 'Shuffle Cards Content' for the user. 
    quickGameButton.addEventListener('click', ActivateShuffleCardsContent);

    mainMenuContent.appendChild(quickGameButton); 
}


function Settings(){
    const mainMenuContent = document.querySelector('.main-menu-content');
    
    const settingsButton = document.createElement('button');
    settingsButton.textContent = 'Settings'; 

    mainMenuContent.appendChild(settingsButton); 
}


function SoSuStudio(){
    const mainMenuContent = document.querySelector('.main-menu-content');

    const sosuStudio = document.createElement('button');
    sosuStudio.textContent = 'SoSu Studio';

    mainMenuContent.appendChild(sosuStudio);
}

// ShuffleCardsContentDOM(): The shuffle cards content DOM.
export function ShuffleCardsContentDOM(){
    const content = document.getElementById('content');

    const shuffleCardsContent = document.createElement('div'); 
    shuffleCardsContent.classList.add('shuffle-cards-content');

    content.appendChild(shuffleCardsContent); 
}

// ActivateShuffleCardsContent(): Will activate the shuffle cards content for the user.
function ActivateShuffleCardsContent(){
    ShuffleCardsContent(null); 
}

// LoadingRoomDOM(): The loading room DOM.
export function LoadingRoomDOM(){
    const content = document.getElementById('content'); 

    const loadingRoomContent = document.createElement('div'); 
    loadingRoomContent.classList.add('loading-room-content'); 

    content.appendChild(loadingRoomContent); 
}

// BattleArena(): The main battle arena.
export function BattleArenaDOM(){
    const content = document.getElementById('content');

    const battleArenaContent = document.createElement('div'); 
    battleArenaContent.classList.add('battle-arena-content');

    content.appendChild(battleArenaContent); 
}

// InGameMenu(): A window that the user can open during in the in game content. 
// The 'In Game Menu' is activated when the 'Shuffle Cards Content' is opened by the user
// by clicking on the quick game button. 
export function InGameMenuDOM(){
    const content = document.getElementById('content');

    const inGameMenuContent = document.createElement('div'); 
    inGameMenuContent.classList.add('in-game-menu-content'); 

    const inGameMenuContainer = document.createElement('div');

    const menuImg = document.createElement('img'); 
    menuImg.src = inGameMenuImg;

    menuImg.addEventListener('click', OpenInGameMenu);

    inGameMenuContainer.appendChild(menuImg); 
    inGameMenuContent.appendChild(inGameMenuContainer); 
    content.appendChild(inGameMenuContent);
}

// OpenInGameMenu(): In Game Menu will open.
// Note: This function might be moved to its own file.
function OpenInGameMenu(e){
    e.target.className = "rotate-in-game-menu";

    const content = document.getElementById('content');

    const menuImg = document.querySelector('.in-game-menu-content > div > img[src]');
    menuImg.classList.add('no-clicks');  

    const shuffleCardsContentButtons = document.querySelectorAll('.shuffle-cards-content > button'); 
    const shuffledCards = document.querySelectorAll('.shuffle-cards-content > div > div'); 

    const battleArenaContentButtons = document.querySelectorAll('.battle-arena-content > div:nth-child(5) > button');

    // The official In Game Menu Window:
    const InGameMenuWindow = document.createElement('div'); 
    InGameMenuWindow.classList.add('in-game-menu-window'); 
    InGameMenuWindow.classList.add('open-in-game-menu-window'); 

    // The button to close the In Game Menu Window: 
    const closeWindowContainer = document.createElement('div'); 
    const closeWindowButton = document.createElement('img'); 
    closeWindowButton.src = closeWindowButtonImg; 
    closeWindowButton.addEventListener('click', CloseInGameMenuWindow); 

    // The in game menu selection container: 
    const inGameMenuSelectionContainer = document.createElement('div');
    inGameMenuSelectionContainer.classList.add('in-game-menu-selection-container');

    // Back to the main menu button:
    // Note: Might change the name of the button. 
    const backToMainMenuBtn = document.createElement('button'); 
    content.childNodes.forEach((child) => {
        console.log(child.className); // Testing 
        if (child.className === "shuffle-cards-content")
        {
            shuffleCardsContentButtons.forEach((button) => {
                button.disabled = true;
            });

            shuffledCards.forEach((card) => {
                card.classList.add('no-clicks');
            });
        
            document.documentElement.style.setProperty('--inGameMenuWindowY', `${-305}px`); // Set the y in javascript due to initial game content already added.
            backToMainMenuBtn.textContent = "Back To Main Menu"; 
        }
        else if (child.className === "battle-arena-content")
        {
            battleArenaContentButtons.forEach((button) => {
                button.disabled = true; 
            });

            document.documentElement.style.setProperty('--inGameMenuWindowY', `${-381}px`); 
            backToMainMenuBtn.textContent = "Quit Game"; 
        }
    });
    backToMainMenuBtn.addEventListener('click', InGameWindowSelection);

    closeWindowContainer.appendChild(closeWindowButton);
    inGameMenuSelectionContainer.appendChild(backToMainMenuBtn);
    InGameMenuWindow.appendChild(closeWindowContainer); 
    InGameMenuWindow.appendChild(inGameMenuSelectionContainer); 
    content.appendChild(InGameMenuWindow)
}

// CloseInGameMenu(): In Game Menu will close. 
function CloseInGameMenuWindow(e){
    const content = document.getElementById('content'); 

    const inGameMenuWindow = document.querySelector('.in-game-menu-window');
    inGameMenuWindow.classList.remove('open-in-game-menu-window');
    inGameMenuWindow.classList.add('close-in-game-menu-window'); 

    const shuffleCardsContentButtons = document.querySelectorAll('.shuffle-cards-content > button');
    const shuffledCards = document.querySelectorAll('.shuffle-cards-content > div > div'); 

    const battleArenaContentButtons = document.querySelectorAll('.battle-arena-content > div:nth-child(5) > button'); 

    const menuImg = document.querySelector('.in-game-menu-content > div > img[src]');
    menuImg.classList.remove('rotate-in-game-menu'); 

    // WGO: Will remove the 'In Game Menu Window' entirely from the content application 
    // after the 1 second animation is complete once the window closes.  
    setTimeout(() => {
        content.removeChild(inGameMenuWindow); 
        menuImg.classList.remove('no-clicks'); 

        content.childNodes.forEach((child) => {
            if (child.className === "shuffle-cards-content")
            {
                shuffleCardsContentButtons.forEach((button) => {
                    button.disabled = false; 
                }); 

                shuffledCards.forEach((card) => {
                    card.classList.remove('no-clicks');  
                });
            }
            else if (child.className === "battle-arena-content")
            {
                battleArenaContentButtons.forEach((button) => {
                    button.disabled = false;
                });
            }
        }); 
    }, 2000); 
}

// CloseInGameMenuWindowFromSelection(): Will close the 'In Game Menu Window' from the selection container of the window. 
function CloseInGameMenuWindowFromSelection(selection){
    const content = document.getElementById('content');  
    const inGameMenuImg = document.querySelector('.in-game-menu-content > div > img[src]'); 
    const inGameMenuWindow = document.querySelector('.in-game-menu-window');
    const shuffledCards = document.querySelectorAll('.shuffle-cards-content > div > div');
    const shuffleCardsContentButtons = document.querySelectorAll('.shuffle-cards-content > button');

    if (selection === "ShuffleCardsContent")
    {
        shuffledCards.forEach((card) => {
            card.classList.add('no-clicks'); 
        });

        shuffleCardsContentButtons.forEach((button) => {
            button.disabled = true;
        });
    }
    else if (selection === "BattleArenaContent")
    {
        // Note: Add The battle arena content that you want disabled 
        // while the 'In Game Menu Window' is being closed.  
    }

    inGameMenuImg.classList.remove('rotate-in-game-menu');
    inGameMenuImg.classList.add('no-clicks');

    inGameMenuWindow.classList.remove('open-in-game-menu-window'); 
    inGameMenuWindow.classList.add('close-in-game-menu-window'); 

    setTimeout(() => {
        content.removeChild(inGameMenuWindow); 
    }, 2000);
}

// InGameWindowSelection(): Will gather the node elements that relate to the selection chosen.
function InGameWindowSelection(e){
    const content = document.getElementById('content'); 
    const inGameMenuContent = document.querySelector('.in-game-menu-content'); 
    const shuffleCardsContent = document.querySelector('.shuffle-cards-content');
    const battleArenaContent = document.querySelector('.battle-arena-content');   
    
    if (e.target.textContent === "Back To Main Menu")
    {
        CloseInGameMenuWindowFromSelection("ShuffleCardsContent"); 
        setTimeout(() => {
            content.removeChild(inGameMenuContent); 
            content.removeChild(shuffleCardsContent); 
            MainMenuContent();
        }, 2000);
    }
    else if (e.target.textContent === "Quit Game")
    {
        CloseInGameMenuWindowFromSelection("BattleArenaContent"); 
        setTimeout(() => {
            content.removeChild(inGameMenuContent); 
            content.removeChild(battleArenaContent);
            MainMenuContent(); 
        }, 2000); 
    }

}