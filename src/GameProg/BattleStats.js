import { userMainTools } from "./UserMainTools";
import { compMainTools } from "./CompMainTools";
import { SingularityFactory } from "./SingularityFactory";
import { compDeck } from "./CompDeck";

// BattleStats(): Will handle all the battle stats here.
export function BattleStats(attacker, atkType){
    if (attacker === 'user')
    {
        return UserBattleStats(atkType); 
    }
    else
    {
        return ComputerBattleStats(atkType); 
    } 
}

// UserBattleStats(): The user battle stats. 
function UserBattleStats(atkType){
    if (atkType === 'Attack')
    {
        const decOne = 1/3; 
        const decTwo = 2/3; 
        const atkPoints = [Number(decOne.toFixed(1)), 1/2, 0, Number(decTwo.toFixed(1)), 3/4, 1, 0];
        const atkIndex = AttackPoints(atkPoints.length);
    
        SingularityFactory(atkPoints[atkIndex], 'user'); 
    
        compMainTools.mainBattleCard.esse = compMainTools.mainBattleCard.esse - (userMainTools.mainBattleCard.atk * atkPoints[atkIndex]);
        compMainTools.mainBattleCard.esse = Math.trunc(compMainTools.mainBattleCard.esse); 
    
        // Computer Life/Essence: 
        if (compMainTools.mainBattleCard.esse <= 0)
        {
            compMainTools.mainBattleCard.esse = 0; 
        }

        // Test if the first comp card has been hit. This allow the computer to use more battle tactics when triggered:
        if (compMainTools.cardSwitches === 0)
        {
            if (atkPoints[atkIndex] !== 0) // If not a miss, then a hit. 
            {
                compDeck.forEach((card) => {
                    if (card.name === compMainTools.mainBattleCard.name)
                    {
                        card.beenHit = true; 
                    }
                });
            }
        }
            
        if (atkPoints[atkIndex] === 0)
        {
            return 'Miss!'; 
        }
        else if (atkPoints[atkIndex] === 1)
        {
            return `${userMainTools.mainBattleCard.atk} Critial Hit!`;
        }
        else 
        {
            return `${Math.trunc(userMainTools.mainBattleCard.atk * atkPoints[atkIndex])} Damage!`;
        }
    }
}

// ComputerBattleStats(): The computer battle stats. 
function ComputerBattleStats(atkType){
    if (atkType === 'Attack')
    {
        const decOne = 1/3; 
        const decTwo = 2/3; 
        const atkPoints = [Number(decOne.toFixed(1)), 1/2, 0, Number(decTwo.toFixed(1)), 3/4, 1, 0];
        const atkIndex = AttackPoints(atkPoints.length);
        
        SingularityFactory(atkPoints[atkIndex], 'comp'); 

        userMainTools.mainBattleCard.esse = userMainTools.mainBattleCard.esse - (compMainTools.mainBattleCard.atk * atkPoints[atkIndex]); 
        userMainTools.mainBattleCard.esse = Math.trunc(userMainTools.mainBattleCard.esse); 

        if (userMainTools.mainBattleCard.esse <= 0)
        {
            userMainTools.mainBattleCard.esse = 0; 
        }

        if (atkPoints[atkIndex] === 0)
        {
            return 'Miss!';
        }
        else if (atkPoints[atkIndex] === 1)
        {
            return `${compMainTools.mainBattleCard.atk} Critical Hit!`; 
        }
        else 
        {
            return `${Math.trunc(compMainTools.mainBattleCard.atk * atkPoints[atkIndex])} Damage!`; 
        }
    }  
}

// AttackPoints(): Returns a attack point integer. 
function AttackPoints(length){
    const atkIndex = Math.floor(Math.random() * length); 

    return atkIndex; 
}