import { MainMenuContentDOM } from "../DOM-Content/DomContent";

import { userDeck } from "../GameProg/UserDeck";
import { userMainTools } from "../GameProg/UserMainTools";

// MainMenuContent(): Will open the main menu content for the user. 
export function MainMenuContent(){
    MainMenuContentDOM();

    // Restarting the initial user deck: 
    userDeck.length = 0; 

    // Resetting the 'number of shuffles' back to 0 from 'user main tools':
    userMainTools.numOfShuffles = 0; 
}