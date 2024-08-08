import { userDeck } from "../GameProg/UserDeck";
import { compDeck } from "../GameProg/CompDeck";
import { userMainTools } from "../GameProg/UserMainTools";
import { compMainTools } from "../GameProg/CompMainTools";
import { BattleStats } from "../GameProg/BattleStats";

/** |Battle Arena Content Manual| 
 * => For 'controls' Parameter:
 * controls = null => Will initiate all the original content for the battle arena. 
 * Will only be initiated once when the battle arena opens after the loading room. 
 * 
 * controls = 1 => Resets the original content after the 'main battle card' switched out for
 * another card from the players 'card deck station'. This will be operational for both the user
 * and computer. 
 * 
 * controls = 2 => Resets the 'Card Stat Station', 'Card Deck Station', and the 'Control Station'.
 * The reset is for the 'Card Stat Station' after the user and computer take turns
 * attacking each other and produce damage messages for regular damage, critical hits, and misses. 
 * This reset happens after .5 seconds because this is the user attack and computer attack time
 * duration. The 'BAT' (Button Activity Time) will continue with adding keeping the UI-buttons 
 * disabled during the animated attacks to prevent any possible errors. 
 * 
 * controls = 3 => Resets the original content after 'controls = 2'. After the damage message has been produced,
 * all the original content will be reset after 1 second has passed for the damage message. 
*/

// BattleArenaContent(): The main battle arena content.
export function BattleArenaContent(controls){
    const battleArenaContent = document.querySelector('.battle-arena-content'); 
    const singularityPointStation = document.querySelector('.singularity-point-station'); 
    const battleStation = document.querySelector('.battle-station');
    const cardStatStation = document.querySelector('.card-stat-station'); 
    const cardDeckStation = document.querySelector('.card-deck-station');  
    const controlStation = document.querySelector('.control-station'); 

    if (controls === null)
    {
        SingularityPointStation(); 
        BattleStation(controls); 
        CardStatStation(); 
        CardDeckStation(); 
        ControlStation();
    }
    else if (controls === 1)
    {
        battleArenaContent.removeChild(singularityPointStation);
        battleArenaContent.removeChild(battleStation); 
        battleArenaContent.removeChild(cardStatStation);
        battleArenaContent.removeChild(cardDeckStation); 
        battleArenaContent.removeChild(controlStation); 

        SingularityPointStation();
        BattleStation(controls); 
        CardStatStation();
        CardDeckStation(); 
        ControlStation(); 
    }
    else if (controls === 2)
    {
        battleArenaContent.removeChild(cardStatStation); 
        battleArenaContent.removeChild(cardDeckStation); 
        battleArenaContent.removeChild(controlStation); 

        CardStatStation();
        CardDeckStation();
        ControlStation(); 
        ButtonActivityTime(2); 

        setTimeout(() => {BattleArenaContent(3);}, 1000);
    }
    else if (controls === 3)
    {
        battleArenaContent.removeChild(singularityPointStation); 
        battleArenaContent.removeChild(battleStation);
        battleArenaContent.removeChild(cardStatStation); 
        battleArenaContent.removeChild(cardDeckStation); 
        battleArenaContent.removeChild(controlStation); 

        SingularityPointStation(); 
        BattleStation(1); // Note: The 1 is only temporary for now. 
        CardStatStation();
        CardDeckStation(); 
        ControlStation(); 
        ButtonActivityTime(2); 
    }
}

// ButtonActivityTime(): Will control the active time for each button.
function ButtonActivityTime(controls){
    const controlStationButtons = document.querySelectorAll('.control-station > button');
    const userDeckStation = document.querySelectorAll('.card-deck-station > div:nth-child(1) > div');

    if (controls === 2)
    {
        controlStationButtons.forEach((button) => {
            button.disabled = true; 
        });

        userDeckStation.forEach((card) => {
            card.classList.add('no-clicks');
        }); 

        setTimeout(() => {
            controlStationButtons.forEach((button) => {
                button.disabled = false;
            });

            userDeckStation.forEach((card) => {
                card.classList.remove('no-clicks'); 
            });
        }, 2000); // Note: The time for this BAT will change due to the computer attack timing. 
    }
}

// SingularityPointStation(): Will produce singularity points for the user and produce. 
function SingularityPointStation(){
    const battleArenaContent = document.querySelector('.battle-arena-content'); 

    const singularityPointStation = document.createElement('div');
    singularityPointStation.classList.add('singularity-point-station'); 

    const userSingularityPoints = document.createElement('div');
    userSingularityPoints.textContent = `${userMainTools.singularityPoints} sp`;

    const compSingularityPoints = document.createElement('div'); 
    compSingularityPoints.textContent = `${compMainTools.singularityPoints} sp`; 

    singularityPointStation.appendChild(userSingularityPoints);
    singularityPointStation.appendChild(compSingularityPoints); 
    battleArenaContent.appendChild(singularityPointStation); 
}

// BattleStation(): User and computer battles will take place here.
function BattleStation(controls){
    const battleArenaContent = document.querySelector('.battle-arena-content');

    const battleStation = document.createElement('div'); 
    battleStation.classList.add('battle-station');

    // Main User Battle Card:
    const userCard = document.createElement('div');
    if (controls === null)
    {
        userMainTools.mainBattleCard = userDeck[0];
        userCard.textContent = userMainTools.mainBattleCard.name; 
    }
    else if (controls === 1)
    {
        userCard.textContent = userMainTools.mainBattleCard.name; 
    }

    // Main Computer Battle Card: 
    const compCard = document.createElement('div');
    if (controls === null)
    {
        compMainTools.mainBattleCard = compDeck[0];
        compCard.textContent = compMainTools.mainBattleCard.name; 
    }
    else if (controls === 1)
    {
        compCard.textContent = compMainTools.mainBattleCard.name; 
    }

    battleStation.appendChild(userCard); 
    battleStation.appendChild(compCard);
    battleArenaContent.appendChild(battleStation); 
}

// CardStatStation(): Will display the main battle cards stats. 
function CardStatStation(){
    const battleArenaContent = document.querySelector('.battle-arena-content'); 

    const cardStatStation = document.createElement('div'); 
    cardStatStation.classList.add('card-stat-station'); 

    // User Card Stats: 
    const userCardStat = document.createElement('div');
    userDeck.forEach((card) => {
        if (card.tempName === userMainTools.mainBattleCard.tempName)
        {
            const cardName = document.createElement('div'); 
            cardName.textContent = `Name: ${card.tempName}`; 
            userCardStat.appendChild(cardName); 

            const cardCate = document.createElement('div');
            cardCate.textContent = `Cate: ${card.cate}`; 
            userCardStat.appendChild(cardCate); 

            const cardAtk = document.createElement('div'); 
            cardAtk.textContent = `Atk: ${card.atk}`; 
            userCardStat.appendChild(cardAtk); 

            const cardDef = document.createElement('div'); 
            cardDef.textContent = `Def: ${card.def}`;
            userCardStat.appendChild(cardDef); 

            const cardEsse = document.createElement('div');
            cardEsse.textContent = `Esse: ${card.esse}`;
            userCardStat.appendChild(cardEsse); 
        }
    });

    // Computer Card Stats: 
    const compCardStat = document.createElement('div');
    compDeck.forEach((card) => {
        if (card.tempName === compMainTools.mainBattleCard.tempName)
        {
            const cardName = document.createElement('div'); 
            cardName.textContent = `Name: ${card.tempName}`; 
            compCardStat.appendChild(cardName); 

            const cardCate = document.createElement('div'); 
            cardCate.textContent = `Cate: ${card.cate}`; 
            compCardStat.appendChild(cardCate); 

            const cardAtk = document.createElement('div');
            cardAtk.textContent = `Atk: ${card.atk}`;
            compCardStat.appendChild(cardAtk);

            const cardDef = document.createElement('div');
            cardDef.textContent = `Def: ${card.def}`;
            compCardStat.appendChild(cardDef); 

            const cardEsse = document.createElement('div'); 
            cardEsse.textContent = `Esse: ${card.esse}`;
            compCardStat.appendChild(cardEsse); 
        }
    })

    cardStatStation.appendChild(userCardStat);
    cardStatStation.appendChild(compCardStat); 
    battleArenaContent.appendChild(cardStatStation); 
}

// CardDeckStation(): The user can switch there cards out from the deck during battle.
function CardDeckStation(){
    const battleArenaContent = document.querySelector('.battle-arena-content'); 

    const cardDeckStation = document.createElement('div'); 
    cardDeckStation.classList.add('card-deck-station'); 

    const userDeckStation = document.createElement('div'); 
    for (let i = 0; i < userDeck.length; i++)
    {
        if (userMainTools.mainBattleCard.name !== userDeck[i].name)
        {
            const card = document.createElement('div'); 
            card.textContent = userDeck[i].tempName; 
            userDeckStation.appendChild(card); 
            card.addEventListener('click', SwitchCard);
        }
    }

    const compDeckStation = document.createElement('div'); 
    for (let i = 0; i < compDeck.length; i++)
    {
        if (compMainTools.mainBattleCard.name !== compDeck[i].name)
        {
            const card = document.createElement('div');
            card.textContent = compDeck[i].tempName; 
            compDeckStation.appendChild(card);
        }
    }

    cardDeckStation.appendChild(userDeckStation);
    cardDeckStation.appendChild(compDeckStation); 
    battleArenaContent.appendChild(cardDeckStation); 
}

// SwitchCard(): Will switch out the user cards from the battle arena into the card deck.
function SwitchCard(e){
    userMainTools.switchCard = e.target.textContent;  

    userDeck.forEach((card) => {
        if (card.tempName === userMainTools.switchCard)
        {
            userMainTools.mainBattleCard = card; 
        }
    });

    BattleArenaContent(1); 
}

// ControlStation(): The main control station for the user.  
function ControlStation(){
    const battleArenaContent = document.querySelector('.battle-arena-content');

    const controlStation = document.createElement('div'); 
    controlStation.classList.add('control-station'); 

    const attackButton = document.createElement('button'); 
    attackButton.textContent = 'Attack';
    attackButton.addEventListener('click', UserAttack);

    const defendButton = document.createElement('button'); 
    defendButton.textContent = 'Defend';

    controlStation.appendChild(attackButton);
    controlStation.appendChild(defendButton); 
    battleArenaContent.appendChild(controlStation); 
}

// UserAttack(): Will handle all the user attacks. 
function UserAttack(e){
    if (e.target.textContent === 'Attack')
    {
        const battleStation = document.querySelector('.battle-station'); 
        document.documentElement.style.setProperty('--battleStationHalfWidth', `${(battleStation.clientWidth / 4)}px`); 

        const userCard = document.querySelector('.battle-station > div:nth-child(1)');
        userCard.classList.add('user-atk-movement');
        
        const compCard = document.querySelector('.battle-station > div:nth-child(2)');

        const attackButton = document.querySelector('.control-station > button:nth-child(1)');
        attackButton.disabled = true;

        const defendButton = document.querySelector('.control-station > button:nth-child(2)'); 
        defendButton.disabled = true; 

        const userDeckStation = document.querySelectorAll('.card-deck-station > div:nth-child(1) > div');
        userDeckStation.forEach((card) => {
            card.classList.add('no-clicks'); 
        }); 

        const damage = BattleStats('user', e.target.textContent); 

        setTimeout(() => {
            const damageContainer = document.createElement('div');
            damageContainer.classList.add('damage-container'); 
            damageContainer.textContent = damage; 
            compCard.appendChild(damageContainer);

            BattleArenaContent(2); 
        }, 500);
    }

    // WGO: Initiate the computer attack after 3 seconds. 
    setTimeout(() => {
        ComputerAttack();
    }, 3000);
}

// ComputerAttack(): Will handle all the computer attacks. 
function ComputerAttack(){
    const atkType = 'Attack';

    if (atkType === 'Attack')
    {
        const battleStation = document.querySelector('.battle-station'); 
        document.documentElement.style.setProperty('--battleStationHalfWidth', `${-(battleStation.clientWidth / 4)}px`);

        const compCard = document.querySelector('.battle-station > div:nth-child(2)'); 
        compCard.classList.add('comp-atk-movement'); 

        const damage = BattleStats('computer', atkType); 
        console.log('Computer Attack: ', damage); // Testing 

        setTimeout(() => {
            const compDamageContainer = document.createElement('div'); 
            compDamageContainer.classList.add('comp-damage-container'); 
            compDamageContainer.textContent = damage; 
            compCard.appendChild(compDamageContainer); 

            BattleArenaContent(2); 
        }, 500);
    }

}