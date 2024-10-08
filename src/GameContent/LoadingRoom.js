import { ShuffleComputerCards } from "../GameProg/ShuffleComputerCards";
import { compDeck } from "../GameProg/CompDeck";

import { BattleArenaDOM, InGameMenuDOM } from "../DOM-Content/DomContent";
import { BattleArenaContent } from "./BattleArena";
import { LoadingRoomDOM } from "../DOM-Content/DomContent";

// LoadingRoom(): The loading room will help load up stages, computer decks, etc.
export function LoadingRoom(control){
    if (control === 1)
    {
        const content = document.getElementById('content');
        content.replaceChildren();
        console.log(content); // Testing 

        console.log('If control 1: Loading up the computer deck.');  // Testing

        // shuffle the computer deck:
        compDeck = [...ShuffleComputerCards()]; 

        // NOTE: Once the computer cards have been shuffled, The battle arena will open and
        // the user will be able to engage in battle with the computer. A boolean variable
        // will probably be used to initiate the battle arena right after the computer cards
        // are shuffled. 

        if (compDeck.length !== 0)
        {
            // Note: setTimeout() function might need to be used for this section. 
            console.log('Battle Arena will initiated in 10 seconds'); // Testing  

            LoadingRoomDOM(); 
            const loadingRoomContent = document.querySelector('.loading-room-content');
            loadingRoomContent.textContent = "Loading..."; 

            setTimeout(() => {
                content.removeChild(loadingRoomContent);
                InGameMenuDOM();
                BattleArenaDOM();  
                BattleArenaContent(null); 
            }, 10000);
        }

    }
}