
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#description');
const town = document.querySelector('#town');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-22&lon=-49&units=metric&appid=f65b05c7aa2daf8f365c416be1f3c4da';


async function apiFetch() {
  try {
    const response = await fetch(url); 
    if (response.ok) {
      const data = await response.json(); 
      console.log(data); 
      displayResults(data); 
    } else {
      throw new Error(await response.text()); 
    }
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`; 
  town.textContent = data.name;
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
  let desc = data.weather[0].description; 

  weatherIcon.setAttribute('src', iconSrc); 
  weatherIcon.setAttribute('alt', desc); 
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); 
}


apiFetch();
