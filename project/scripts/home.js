document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('data/players.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        const players = data.players;
        const topScorers = players.sort((a, b) => b.goals_scored - a.goals_scored).slice(0, 3);

        const topScorersContainer = document.getElementById('top-scorers-container');
        topScorersContainer.innerHTML = "";

        topScorers.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card', 'hidden');

            playerCard.innerHTML = `
                <img data-src="images/${player.image}" alt="${player.name}" class="player-image lazy">
                <h3>${player.name}</h3>
                <p><strong>Goals:</strong> ${player.goals_scored}</p>
            `;

            topScorersContainer.appendChild(playerCard);

            setTimeout(() => {
                playerCard.classList.add('show');
            }, index * 300);
        });

        const lazyImages = document.querySelectorAll('.lazy');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
        
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});
