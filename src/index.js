import { InitializeDOMContent } from "./DOM-Content/DomContent";
import { ShuffleCardsContent } from "./GameContent/ShuffleCardsContent";
import { LoadingRoom } from "./GameContent/LoadingRoom";
import { BattleOver } from "./GameContent/BattleOver";

import battleThemeTest from './Sounds/BattleThemes/battleTheme.wav'; 
import mainMenuThemeTest from './Sounds/GeneralThemes/soshu1.mp3'; 
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
 * 
 * Date: August-1-2024
 * 'LoadingRoomDOM' function was added to the DOMContent.js file. This DOM file will contain recursion algorithms that may
 * have a long run time due to the amount of items being inputted. There may also be asynchronous algorithms being initiated.
 * The loading room will help with the processing time for each item and algorithm so the game will run smoother. The initiation
 * file will is called LoadingRoom.js and is located in the GameContent folder. 
 * 
 * The 'shuffleComputerCards' function was added to the LoadingRoom.js file. This function will contain a recursion algorithm that 
 * shuffles the computer deck of cards with the same function that shuffled the user deck. The computer deck will be compared to the 
 * user deck to find 2 or more duplicate cards. If there are 2 or more duplicate cards, then the function will be called repeatedly until only
 * one duplicate is found. The 'loadingroom' is being tested in the index.js file along with the 'ShuffleCardsContent' function.
 * 
 * Current Work/Coninue Where Last Left Off: N/A
 * 
 * Date: August-7-2024
 * The 'BattleArenaContent' function will be loaded up after the 'LoadingRoom' is complete. The 'BattleArena' function has been improved with new functions.
 * The user can switch their 'main battle card' for other cards in their deck during battle. The user and computer will gain sp (singularity points) after
 * each attack that isn't a miss. There are three types of attacks: regular attack, critical attack, and miss. Regular attacks cause regular damage, and 
 * critical attacks cause critical damage. The 'Control Station' function will allow the user to initiate commands during battle. The 'Button Activity Time' function
 * will use the BAT system. The BAT system will disable UI and button controls in the application during battle animations to prevent errors. 
 * 
 * Date: August-15-2024
 * New content has been added to the 'BattleArenaContent' function. The computer now has the ability to switch cards. This ability will need to be refactored 
 * in order for the computer to make more intelligent decisions. Details about the computers card switching capabilities are commented in the 'ComputerAttack'
 * function. A 'battle theme' audio has been added to the 'Test Content Section'. Once the user hits the 'test button', the audio will play for the 
 * Battle Arena Content. A new GameProg file called 'CompTactics' was created and will contain a function called 'CompTatics'. This function will process
 * all the computers non-lethal moves such switching cards from the their deck.  
 * 
 * Date: August-27-2024
 * New content has been added to the 'BattleArenaContent' function. The user has the ability to the defend during battle. The defense point will be a decimal
 * result obtained from the attack point, and subtracted from the attack point for the essence card stat. A new function called the 'Progressive Data Intelligence'
 * will be used to decide to every computer response, you can think of it as a computer intelligence function where the computer will respond to the users moves,
 * and base these moves around the current stats and attributes that the computer contains. These function is however temporary at the moment and maybe changed to
 * something else more suitable for computer intelligence. 
 * 
 * Current Work/Continue Where Last Left Off: Add defense movement to the computer. 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Testing Content Section|
// => Testing the 'ShuffleCardsContent' function.
// ShuffleCardsContent(null);

// => Testing the 'loading room' with ShuffleComputerCards.js file. 
const content = document.getElementById('content'); 
const testButton = document.createElement('button'); 
testButton.textContent = "Test Button";  
testButton.addEventListener('click', LoadUp);
content.appendChild(testButton); 
function LoadUp()
{
    LoadingRoom(1); 
    const battleThemeOne = new Audio(battleThemeTest);
    // battleThemeOne.play();
    // battleThemeOne.volume = 0.10; 
}

// => Testing the Main Menu Music with button inside of the 'main menu content' function. (Method 1); 
// Note: This method with Fade In/Out might work perfectly. 
const testMainMenuMusic = document.createElement('button'); 
testMainMenuMusic.textContent = 'Test Main Menu Music'; 

const mainMenuContent = document.querySelector('.main-menu-content');
mainMenuContent.appendChild(testMainMenuMusic);

testMainMenuMusic.addEventListener('click', TestMainMenuMusic);

function TestMainMenuMusic(){
    const newAudio = new Audio(mainMenuThemeTest);
    newAudio.play();
    newAudio.volume = 0.50;
    setTimeout(() => {
        TestMainMenuMusic(); 
    }, 11500); 

}

// => Testing the Battle Over (Game Over) Window:
// Note: The game over window will pop-up when the the user or computer wins a battle. 
// BattleOver('Quick Game', 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Practicing Programming Sequences|
console.log('|Practicing Programming Sequences|');

// Normal Functions (Named Functions):
function funkyFunction(music, isWhiteBoy){
    if (isWhiteBoy)
    {
        console.log('Play: ', music); 
    }
}
funkyFunction('that funky music', true); 

// Anonymous Functions: 
const funkyFunctionOne = function(music, isWhiteBoy){
    if (isWhiteBoy){
        console.log('Play: ', music); 
    }
}
funkyFunctionOne('that funky music white boy!', true); 

// Arrow Functions:
/** These are just a shorter way to write a function. They do have some special rules however,
 * and understanding the rules imposed by arrow functions will help you understand callbacks.
 * We're going to ignore the this binding rules for these functions for now.
 *  If there is only one argument, the parenthesis () can be omitted.
 *  If arrow functions are one line, the brackets {} can be omitted. 
 *      When omitting the brackets, the arrow funcion returns the evaluated expression 
 *      without requiring the return keyword. 
 */
const funkyFunctionTwo = (music, isWhiteBoy) => {
    if (isWhiteBoy){
        console.log('Play: ', music); 
    }
}
funkyFunctionTwo('funky music white boy!', true); 

const playThat = (funky) => {
    return funky + " music";
}

const playThatOne = funky => {
    return funky + " music"; 
}

const playThatTwo = funky => funky + " music";

const playThatThree = () => "funky music";
const playThatFour = () => { return "funky music"; }
const playThatFive = () => {
    return "funky music"; 
}

// What Callbacks Look Like: 
const notes = ['do', 're', 'me'];
notes.forEach((note) => console.log(note)); 
notes.forEach(function(note){
    console.log(note);
});
notes.forEach(console.log); // Vodoo Shizz

/** How Callbacks Works:
 * Callbacks are just funtions passed into other functions as arguments (as a parameter).
 * 
 * Below is what 'forEach' might look like under the hood, notice it calls the callback function
 * each time it loops over an item. The line with callback(array[i]) is calling the callback 
 * function with an argument, which we defined inline as an anonymous function.
 */

function myForEach(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i]); // This is when the callback function gets called, or executed. 
    }
}
const myArray = [2, 3, 4, 2];

// Example 1:
myForEach(myArray, (item) => {
    console.log('Oh Yes: ', item + 2);
});
console.log('\n');

// Example 2: Note: Change the function name to 'myForEach' for this and each example below to view the output in the console log. 
// const myArrayOne = [2, 3, 4 , 2];
// myForEachOne(myArrayOne, item => console.log(item + 2)); 

// Example 3: 
// myForEachTwo(myArrayOne, function(item){
//     console.log(item + 2);
// });

// Example 4: 
// function printItemPlusTwo(item){
//     console.log(item + 2); 
// }
// myForEachThree(myArrayOne, printItemPlusTwo); 

// Another good example of how callbacks work might be the .map method 
// (read more on MDN), below is one way it might be implemented.
function myMap(array, callback){
    const myNewArray = [];

    for (let i = 0; i < array.length; i++){
        const callbackResult = callback(array[i]); 
        myNewArray.push(callbackResult); 
    }

    return myNewArray;
}

const addedArray = myMap([1, 2, 3], (arrayNum) => {
    return arrayNum + 2; 
});

console.log('.map implementation: ', addedArray);