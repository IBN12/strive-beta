import { InitializeDOMContent } from "./DOM-Content/DomContent";
import { ShuffleCardsContent } from "./GameContent/ShuffleCardsContent";
import "./styles/styles.css"; 

console.log("|Strive Beta|"); // Testing
console.log("Developer: SoSu Studios"); // Testing
console.log("Programmer: IBE"); // Testing
console.log("Start Date: July-24-2024"); // Testing 

console.log('\n'); // Testing 

InitializeDOMContent(); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Project Log|

/** Date: July-24-2024
 * Dom Content file was added and it has a MainMenuContentDOM function and ShuffleCardsContentDOM function. 
 * The ShuffleCardsContentDOM function supports the new user decks being shuffled only 3 times. The cards that
 * will be shuffled for quick play will be the initiator cards from the InitiatorCards.js file. The computer 
 * card deck will also be shuffled here before the battle arena is opened. 
 * 
 * Current Work/Continue Where Last Left Off: Continue working on the ShuffleCardsContent.js file. Display the 4 cards 
 * in a display section. Add certain animations to this file to make it more immersive. You should also work on the 
 * desktop version at the same time if possible. 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Testing Content Section|
ShuffleCardsContent();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////