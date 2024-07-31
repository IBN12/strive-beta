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
 * 
 * Date: July-29-2024
 * New game program content was added to the ShuffleCardsContent.js file. DisplayNumberOfShuffles() function was added to the file
 * in order for the user to see how times they've pressed the shuffle button. The user only gets 3 shuffles until they've reached the
 * limit. 
 * 
 * UserMainTools.js file will hold the userMainTools object. This object will control all the properties that help the 
 * user interact with the application such as 'End Shuffling', 'Number of Shuffles', 'User Win', 'User Loss', etc.
 * 
 * Current Work/Continue Where Last Left Off: Continue working on the ShuffleCardsContent.js file. Display the 4 cards in a display section.
 * Add certain animations to this file to make it more immersive. You should also work on the desktop version at the same time if possible. 
 * 
 * Date: July-31-2024
 * New functions have been added to the ShuffleCardsContent.js file. The DisplayShuffledCards(), ShuffledCardsAnimation(), ViewCard(), and CloseViewCard().
 * The DisplyShuffledCards() function will display the new deck that the player has shuffled. The ShuffledCardsAnimation() function will initiate an
 * animation sequence with for the DisplayShuffledCards() function. The ViewCard() and closeViewCard() functions will open and close a window that describes
 * the card that was shuffled in the DisplayShuffledCards().
 * 
 * Current Work/Continue Where Last Left Off: Continue adding extra functionality to the ShuffledCardsContent.js file if needed. 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Testing Content Section|
ShuffleCardsContent(null);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////