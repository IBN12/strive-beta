import { InitiatorCards } from "./InitiatorCards";
import { userDeck } from "./UserDeck";

// ShuffleCards(): Will Shuffle all of the initiator cards.
export function ShuffleCards(){
    let supraCards = [];
    let fereCards = [];
    let bonumCards = [];
    let indexArr = [];
    
    InitiatorCards.forEach((card) => {
        if (card.cate === "supra")
        {
            supraCards.push(card);
        }
        else if (card.cate === "fere")
        {
            fereCards.push(card); 
        }
        else if (card.cate === "bonum")
        {
            bonumCards.push(card);
        }
    }); 

    userDeck.push(supraCards[SupraCards(supraCards)]);
    userDeck.push(fereCards[FereCards(fereCards)]);
    indexArr = BonumCards(bonumCards); 
    indexArr.forEach((bonumIndex) => {
        userDeck.push(bonumCards[bonumIndex]);
    });

    console.log('The User Deck: ', userDeck); // Testing 
}

// SupraCards(): will shuffle the supra cards.
function SupraCards(supraCards){
    let randomIndex = Math.floor(Math.random() * supraCards.length);
    return randomIndex; 
}

// FereCards(): Will shuffle the fere cards.
function FereCards(fereCards){
    let randomIndex = Math.floor(Math.random() * fereCards.length); 
    return randomIndex;
}

// BonumCards(): Will shuffle the bonum cards.
function BonumCards(bonumCards){
    let noDuplicate = false;
    let indexArr = [];
    let randomIndex = Math.floor(Math.random() * bonumCards.length);
    indexArr.push(randomIndex); 

    while(!noDuplicate)
    {
        randomIndex = Math.floor(Math.random() * bonumCards.length);
        if (!indexArr.includes(randomIndex))
        {
            indexArr.push(randomIndex); 
            noDuplicate = true; 
        }
    }
    
    return indexArr; 
}