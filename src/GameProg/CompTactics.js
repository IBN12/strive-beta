import { compDeck } from "./CompDeck";
import { compMainTools } from "./CompMainTools";

// CompTactics(): All the tactics that don't cause damage to the user will processed here. 
export function CompTactics(tactic){
    if (tactic === 'Switch')
    {
        compDeck.forEach((card) => {
            if (card.name !== compMainTools.mainBattleCard.name)
            {
                compMainTools.cardsToSwitch.push(card); 
            }
        });

        const switchIndex = Math.floor(Math.random() * compMainTools.cardsToSwitch.length); 
        compMainTools.mainBattleCard = compMainTools.cardsToSwitch[switchIndex]; 
    }
}