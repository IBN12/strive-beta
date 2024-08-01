import { ShuffleComputerCards } from "../GameProg/ShuffleComputerCards";

// LoadingRoom(): The loading room will help load up stages, computer decks, etc.
export function LoadingRoom(control){
    if (control === 1)
    {
        console.log('If control 1: Loading up the computer deck.');  // Testing

        // shuffle the computer deck:
        ShuffleComputerCards(); 
    }
}