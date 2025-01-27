const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#description');
const town = document.querySelector('#town');
const forecastContainer = document.querySelector('#forecast-container'); 

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-22&lon=-49&units=metric&appid=f65b05c7aa2daf8f365c416be1f3c4da';

async function apiFetch() {
  try {
    const response = await fetch(url); 
    if (response.ok) {
      const data = await response.json(); 
      console.log(data); 
      displayResults(data); 
      displayForecast(data);
    } else {
      throw new Error(await response.text()); 
    }
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.list[0].main.temp.toFixed(1)}&deg;C`; 
  town.textContent = data.city.name;
  const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`; 
  let desc = data.list[0].weather[0].description; 

  weatherIcon.setAttribute('src', iconSrc); 
  weatherIcon.setAttribute('alt', desc); 
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); 
}

function displayForecast(data) {
  forecastContainer.innerHTML = ''; 

  for (let i = 1; i <= 3; i++) {
    const dayData = data.list[(i * 8)]; 

    // Get the weekday name
    const date = new Date(dayData.dt * 1000);
    const dayName = date.toLocaleString('en-US', { weekday: 'long' }); 

    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');

    const iconSrc = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;

    forecastCard.innerHTML = `
      <h3>${dayName}</h3>
      <img src="${iconSrc}" alt="${dayData.weather[0].description}" loading="lazy">
      <p class="description">${dayData.weather[0].description}</p>
      <p class="temp">${dayData.main.temp.toFixed(1)}&deg;C</p>
    `;

    forecastContainer.appendChild(forecastCard);
  }
}



apiFetch();
