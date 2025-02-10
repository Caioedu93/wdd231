document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch('data/points.json');
    const points = await response.json();

    const container = document.getElementById('discover-container');

    points.forEach(point => {
        const card = document.createElement('div');
        card.classList.add('discover-card');

        card.innerHTML = `
            <h2>${point.name}</h2>
            <figure>
                <img src="images/${point.image}" alt="${point.name}" loading="lazy">
            </figure>
            <address>${point.address}</address>
            <p>${point.description}</p>
            <a href="${point.url}" class="btn-learn-more" target="_blank">Discover More</a>
        `;

        container.appendChild(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const difference = now - lastVisitTime;
        const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    
    localStorage.setItem('lastVisit', now);
});
