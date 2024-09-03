import { userMainTools } from "./UserMainTools";
import { compMainTools } from "./CompMainTools";
import { compDeck } from "./CompDeck";

const storage = {
    userMisses: 0,
    userCrits: 0, 
    userRegHits: 0, 
}

// ProgressiveDataIntelligence(): Will gather data for computer intelligence to better challenge the opponent in battle.
export function ProgressiveDataIntelligence(data){
    
    // Find the comps cards that aren't the main battle card. 
    compDeck.forEach((card) => {
        if (card.name !== compMainTools.mainBattleCard.name)
        {
            compMainTools.cardsToSwitch.push(card); 
        }
    });

    if (data === 'Miss!' || data === 'Computer Switched') // Miss or Computer Switched Battle Cards. 
    {
        return 'Attack'; 
    }
    else
    {
        /** |Computer Intelligence|
         * => Computer Choice:
         * compChoiceOne = 'Attack', 'Defend', 'Switch' = When computer deck has more than one card.
         * compChoiceTwo = 'Attack', 'Defend' = When computer deck has only 1 main battle card. 
        */

        if (compMainTools.mainBattleCard.cate === 'supra')
        {
            // Note 1: This type of TODO should be done with all the other categories to add more 
            // dynamic intelligence for the computer:
            // Note 2: This is just a temporary intelligent pattern for now until 
            if (compMainTools.mainBattleCard.esse > (0.50 * 100) && compDeck.length > 1)
            {
                if (compMainTools.compMisses.length >= 3)
                {
                    const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length);

                    return compMainTools.compChoiceOne[randomChoice];  
                }
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length > 1)
            {
                // Computer Choice One - Comp Deck Length > 1: 'Attack', 'Defend', 'Switch'.
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length);

                return compMainTools.compChoiceOne[randomChoice]; 
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length === 1)
            {
                // Computer Choice Two - Comp Deck Length === 1: 'Attack', 'Defend'.
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceTwo.length); 

                return compMainTools.compChoiceTwo[randomChoice];
            }
        }
        else if (compMainTools.mainBattleCard.cate === 'fere')
        {
            if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length > 1)
            {
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length); 

                return compMainTools.compChoiceOne[randomChoice]; 
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length === 1)
            {
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceTwo.length); 

                return compMainTools.compChoiceTwo[randomChoice]; 
            }
        }
        else if (compMainTools.mainBattleCard.cate === 'bonum')
        {
            if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length > 1)
            {
                // Bonum Card: Random number for 'Attack', 'Switch', and 'Defend'.
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length);

                return compMainTools.compChoiceOne[randomChoice];
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length === 1)
            {
                // Bonum Card: Random number 'Attack', and 'Defend'. 
                const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceTwo.length); 

                return compMainTools.compChoiceTwo[randomChoice]; 
            }
        }
    }
}