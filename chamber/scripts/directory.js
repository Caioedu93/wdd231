document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const memberContainer = document.getElementById('member-container');

    function displayMembers(view) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card', view);

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;

            memberContainer.appendChild(memberCard);
        });
    }

    document.getElementById('grid-view').addEventListener('click', () => {
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
        displayMembers('grid-view');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        memberContainer.classList.add('list-view');
        memberContainer.classList.remove('grid-view');
        displayMembers('list-view');
    });

    displayMembers('grid-view');

    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastModifiedDate;


    const currentYear = new Date().getFullYear();
    document.querySelector('footer p:last-child').innerHTML = '&copy; ' + currentYear + ' WDD231 | Caio Eduardo Jesus de Paula | Brasil';
});

function displaySpotlights() {
    const spotlightContainer = document.getElementById('spotlight-cards');
    const spotlightMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
    
    // Randomly choose 2 or 3 members
    const randomSpotlights = getRandomMembers(spotlightMembers, 2); // Change to 3 for 3 spotlights
    
    spotlightContainer.innerHTML = ''; // Clear previous spotlights
    randomSpotlights.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');
        spotlightCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>Company: ${member.companyName}</p>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(spotlightCard);
    });
}

// Function to get random members (2 or 3)
function getRandomMembers(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
