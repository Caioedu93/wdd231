const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
let prophets = [];

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        prophets = data.prophets; // Store prophets data globally
        displayProphets(prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet, index) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let deathDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let numOfChildren = document.createElement('p');


        if (prophet.name && prophet.lastname && prophet.imageurl) {
            fullName.textContent = `${prophet.name} ${prophet.lastname}`;

            const prophetNumber = index + 1;
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
            deathDate.textContent = `Death: ${prophet.death || 'Still Alive'}`;
            birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
            numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

            card.appendChild(fullName);
            card.appendChild(portrait);
            card.appendChild(birthDate);
            card.appendChild(deathDate);
            card.appendChild(birthPlace);
            card.appendChild(numOfChildren);

            cards.appendChild(card);
        } else {
            console.error('Missing required properties for prophet:', prophet);
        }
    });
};

const filterProphets = (criteria) => {
    cards.innerHTML = '';

    let filteredProphets;

    switch (criteria) {
        case 'all': filteredProphets = prophets; break;
        case 'utah':
            filteredProphets = prophets.filter(prophet => prophet.birthplace.includes('Utah'));
            break;
        case 'outsideUS':
            filteredProphets = prophets.filter(prophet => !prophet.birthplace.includes('USA'));
            break;
        case '95plus':
            filteredProphets = prophets.filter(prophet => {
                const birthYear = new Date(prophet.birthdate).getFullYear();
                const deathYear = prophet.death ? new Date(prophet.death).getFullYear() : new Date().getFullYear();
                const age = deathYear - birthYear;
                console.log(`${prophet.name} ${prophet.lastname} lived to ${age} years`);
                return age >= 95;
            });
            break;
        case '10plusChildren':
            filteredProphets = prophets.filter(prophet => prophet.numofchildren >= 10);
            break;
        default:
            filteredProphets = prophets;
    }

    displayProphets(filteredProphets);
};
document.getElementById('hamburger-btn').addEventListener('click', () => {
    const filterButtons = document.getElementById('filter-buttons');
    filterButtons.classList.toggle('show');
});




