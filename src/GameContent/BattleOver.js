// BattleOver(): The battle over is essentially the game over function.
export function BattleOver(gameType){
    if (gameType === "Quick Game")
    {
        QuickGame();
    }
}

// QuickGame(): Quick Game mode function.
function QuickGame(){
    const battleArenaContent = document.querySelector('.battle-arena-content');
    const battleOverWindow = document.createElement('div');
    battleOverWindow.classList.add('battle-over-window'); 

    const promptOne = document.createElement('div');
    promptOne.textContent = 'Game Over';

    battleOverWindow.appendChild(promptOne);
    battleArenaContent.appendChild(battleOverWindow);
}