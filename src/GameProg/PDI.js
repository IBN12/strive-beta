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
    
    compMainTools.cardsToSwitch.length = 0; 

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
            // Note 1: This is a temporary computer intelligence element. This element
            // will focus on certain computer movements that affect the computer 
            // when the essence is above 50%. 
            if (compMainTools.mainBattleCard.esse > (0.50 * 100) && compDeck.length > 1)
            {
                if (compMainTools.supraMisses.length >= 3) // Supra card has three misses. 
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
            if (compMainTools.mainBattleCard.esse > (0.50 * 100) && compDeck.length > 1)
            {
                if (compMainTools.fereMisses.length >= 3) // Fere card has three misses. 
                {
                    const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length); 

                    return compMainTools.compChoiceOne[randomChoice];  
                }
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length > 1)
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
            if (compMainTools.mainBattleCard.esse > (0.50 * 100) && compDeck.length > 1)
            {
                if (compMainTools.bonumMisses >= 3)
                {
                    const randomChoice = Math.floor(Math.random() * compMainTools.compChoiceOne.length); 

                    return compMainTools.compChoiceOne[randomChoice]; 
                }
            }
            else if (compMainTools.mainBattleCard.esse < (0.50 * 100) && compDeck.length > 1)
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