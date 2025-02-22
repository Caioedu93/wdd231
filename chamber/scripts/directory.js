document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch('data/members.json');
    const members = await response.json();

    
    if (document.getElementById('spotlight-cards')) {
        displaySpotlights(members);
    }

    
    if (document.getElementById('member-container')) {
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
    }

    
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastModifiedDate;

    const currentYear = new Date().getFullYear();
    document.querySelector('footer p:last-child').innerHTML = '&copy; ' + currentYear + ' WDD231 | Caio Eduardo Jesus de Paula | Brasil';
});


function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-cards');
    const spotlightMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

    
    spotlightContainer.classList.add('grid-view', 'small-cards');


    const randomSpotlights = getRandomMembers(spotlightMembers, 3);

    spotlightContainer.innerHTML = ''; 
    randomSpotlights.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');
        spotlightCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.otherInfo}</p>
            <p>Company: ${member.name}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        `;
        spotlightContainer.appendChild(spotlightCard);
    });
}


function getRandomMembers(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
