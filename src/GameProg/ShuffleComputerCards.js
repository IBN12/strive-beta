import { ShuffleCards } from "./ShuffleCards";
import { userDeck } from "./UserDeck";
import { compMainTools } from "./CompMainTools";

// ShuffleComputerCards(): Will shuffle the computer deck. 
export function ShuffleComputerCards(){
    if (!compMainTools.stopDuplicateTest) // Base Case
    {
        compMainTools.newCompDeck = JSON.parse(JSON.stringify(ShuffleCards()));
    }
    
    console.log('Comp Deck: ', compMainTools.newCompDeck); // Testing 
    console.log('User Deck: ', userDeck); 

    // Testing for duplicates. 
    compMainTools.newCompDeck.forEach((card) => {
        for (let i = 0; i < userDeck.length; i++)
        {
            if (card.name === userDeck[i].name)
            {
                console.log('Comp Deck Duplicate: ', card.name); // Testing 
                compMainTools.numOfDuplicates++; 
            }
        }
    });
    console.log('\n'); // Testing  

    if (compMainTools.numOfDuplicates >= 2) // Recursion Case 
    {
        compMainTools.numOfDuplicates = 0; 
        ShuffleComputerCards();
    }
    else
    {
        compMainTools.stopDuplicateTest = true; 
    }

    return compMainTools.newCompDeck; 
}