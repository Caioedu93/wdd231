document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('data/players.json');
        const data = await response.json();
        console.log("Fetched Data:", data);

        const players = data.players;
        updateStats("goals", players); // Default view: Top Scorers

        // Event Listeners for Filter Buttons
        document.getElementById("all-players-btn").addEventListener("click", () => displayAllPlayers(players));
        document.getElementById("top-goals-btn").addEventListener("click", () => updateStats("goals", players));
        document.getElementById("top-assists-btn").addEventListener("click", () => updateStats("assists", players));
        document.getElementById("top-attendance-btn").addEventListener("click", () => updateStats("attendance", players));
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});

// Function to Display Filtered Stats
function updateStats(type, players) {
    const statsContainer = document.getElementById("stats-container");
    statsContainer.innerHTML = ""; // Clear previous content

    let sortedPlayers = [...players];

    if (type === "goals") {
        sortedPlayers.sort((a, b) => b.goals_scored - a.goals_scored);
    } else if (type === "assists") {
        sortedPlayers.sort((a, b) => b.assists - a.assists);
    } else if (type === "attendance") {
        sortedPlayers.sort((a, b) => b.average_attendance - a.average_attendance);
    }

    // Show only top 10 for filtered stats
    sortedPlayers.slice(0, 10).forEach((player, index) => {
        const playerCard = createPlayerCard(player, index);
        statsContainer.appendChild(playerCard);
    });
}

// Function to Display ALL Players
function displayAllPlayers(players) {
    const statsContainer = document.getElementById("stats-container");
    statsContainer.innerHTML = ""; // Clear previous content

    players.forEach((player, index) => {
        const playerCard = createPlayerCard(player, index);
        statsContainer.appendChild(playerCard);
    });
}

// Function to Create Player Cards
function createPlayerCard(player, index) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card", "hidden");

    playerCard.innerHTML = `
        <div class="rank">#${index + 1}</div>
        <img src="images/${player.image}" alt="${player.name}" class="player-image">
        <h3>${player.name}</h3>
        <p><strong>Age:</strong> ${player.age}</p>
        <p><strong>Height:</strong> ${player.height}</p>
        <p><strong>Goals:</strong> ${player.goals_scored}</p>
        <p><strong>Assists:</strong> ${player.assists}</p>
        <p><strong>Attendance:</strong> ${player.average_attendance}%</p>
    `;

    setTimeout(() => {
        playerCard.classList.add("show");
    }, index * 100);

    return playerCard;
} 