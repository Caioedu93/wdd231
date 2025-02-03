function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}

// Function to animate cards when they enter the viewport
function revealCards() {
    const cards = document.querySelectorAll(".membership-card");
    cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 100) {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateX(0)"; // Make them slide in from the side
            }, index * 200);
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", revealCards);

// Run once in case some cards are already visible on load
document.addEventListener("DOMContentLoaded", revealCards);
