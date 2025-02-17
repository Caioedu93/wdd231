function getNextFridayGame() {
    const now = new Date();
    let nextFriday = new Date();
    nextFriday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7 || 7));
    nextFriday.setHours(19, 30, 0, 0); 
    
    return nextFriday;
}

function updateCountdown() {
    const now = new Date();
    const nextGame = getNextFridayGame();
    const timeDiff = nextGame - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("next_game").textContent = `Next Game: ${nextGame.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`;
    document.getElementById("countdown").textContent = `Countdown for the next game: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
