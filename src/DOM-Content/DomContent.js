
// InitializeDOMContent(): Will initialize all the DOM Content. 
export function InitializeDOMContent(){
    MainMenuContentDOM(); 
    ShuffleCardsContentDOM(); 
}

// MainMenu(): Main menu for the application.
function MainMenuContentDOM(){
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
    // Note: Quick Game Button will lead to the ShuffleCardsContent file. 
    quickGameButton.addEventListener('click', () => {console.log('TO: ShuffleCardsContent()');});

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

// ShuffleCardsContentDOM(): The shuffle cards content DOM Content.
function ShuffleCardsContentDOM(){
    const content = document.getElementById('content');

    const shuffleCardsContent = document.createElement('div'); 
    shuffleCardsContent.classList.add('shuffle-cards-content');

    content.appendChild(shuffleCardsContent); 
}