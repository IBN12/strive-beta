import { userMainTools } from "../GameProg/UserMainTools";
import { compMainTools } from "../GameProg/CompMainTools";

// BattleOver(): The battle over is essentially the game over function.
export function BattleOver(gameType, winner){
    const battleArenaContent = document.querySelector('.battle-arena-content');
    battleArenaContent.replaceChildren();

    if (gameType === "Quick Game")
    {
        QuickGame(winner);
    }
}

// QuickGame(): Quick Game mode function.
function QuickGame(winner){
    const battleArenaContent = document.querySelector('.battle-arena-content');
    const battleOverWindow = document.createElement('div');
    battleOverWindow.classList.add('battle-over-window'); 

    battleArenaContent.appendChild(battleOverWindow);

    GameOverPrompt(); 
    WinnerPrompt(winner); 
    GameStats();
}

// GameOverPrompt(): Will prompt Game Over.
function GameOverPrompt(){
    const gameOverPrompt = document.createElement('div');
    const battleOverWindow = document.querySelector('.battle-over-window');  

    gameOverPrompt.textContent = 'Game Over'; 

    battleOverWindow.appendChild(gameOverPrompt); 
}

// WinnerPrompt(): Will prompt the winner. 
function WinnerPrompt(winner){
    const winnerPrompt = document.createElement('div'); 
    const battleOverWindow = document.querySelector('.battle-over-window'); 

    if (winner === 1)
    {
        winnerPrompt.textContent = 'You Win!'; 
    }
    else if (winner === 2)
    {
        winnerPrompt.textContent = 'Computer Wins!'; 
    }

    battleOverWindow.appendChild(winnerPrompt); 
}

// GameStats(): All the user and computer game stats will appear here: 
function GameStats(){
    const battleOverWindow = document.querySelector('.battle-over-window');  
    const gameStats = document.createElement('div'); 
    gameStats.classList.add('game-stats');

    battleOverWindow.appendChild(gameStats);

    UserGameStats();
    CompGameStats(); 
}

// UserGameStats(): The user game stats.
function UserGameStats(){
    const gameStats = document.querySelector('.game-stats'); 

    const userGameStats = document.createElement('div');

    const userTitle = document.createElement('div');
    userTitle.textContent = 'User'; 
    
    const overallAttacks = document.createElement('div');
    overallAttacks.textContent = `Overall Attacks: ${userMainTools.overallAttacks}`;

    const overallDefends = document.createElement('div'); 
    overallDefends.textContent = `Overall Defends: ${userMainTools.overallDefends}`; 

    const overallMisses = document.createElement('div'); 
    overallMisses.textContent = `Overall Misses: ${userMainTools.overallMisses}`;
    
    const overallSwitches = document.createElement('div'); 
    overallSwitches.textContent = `Overall Switches: ${userMainTools.overallSwitches}`;

    const singularityPoints = document.createElement('div'); 
    singularityPoints.textContent = `SP: ${userMainTools.singularityPoints}`; 

    userGameStats.appendChild(userTitle); 
    userGameStats.appendChild(overallAttacks); 
    userGameStats.appendChild(overallDefends); 
    userGameStats.appendChild(overallMisses); 
    userGameStats.appendChild(overallSwitches);
    userGameStats.appendChild(singularityPoints); 
    gameStats.appendChild(userGameStats);
}

// CompGameStats(): The comp game stats. 
function CompGameStats(){
    const gameStats = document.querySelector('.game-stats');

    const compGameStats = document.createElement('div');

    const compTitle = document.createElement('div');
    compTitle.textContent = 'Comp';

    const overallAttacks = document.createElement('div');
    overallAttacks.textContent = `Overall Attacks: ${compMainTools.overallAttacks}`; 

    const overallDefends = document.createElement('div'); 
    overallDefends.textContent = `Overall Defends: ${compMainTools.overallDefends}`;

    const overallMisses = document.createElement('div'); 
    overallMisses.textContent = `Overall Misses: ${compMainTools.overallMisses}`;

    const overallSwitches = document.createElement('div'); 
    overallSwitches.textContent = `Overall Switches: ${compMainTools.overallSwitches}`;

    const singularityPoints = document.createElement('div'); 
    singularityPoints.textContent = `SP: ${compMainTools.singularityPoints}`; 

    compGameStats.appendChild(compTitle); 
    compGameStats.appendChild(overallAttacks); 
    compGameStats.appendChild(overallDefends);
    compGameStats.appendChild(overallMisses);
    compGameStats.appendChild(overallSwitches); 
    compGameStats.appendChild(singularityPoints);
    gameStats.appendChild(compGameStats);
}