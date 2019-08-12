import './styles.css';
import fetchWeather from './fetchWeather.js';
import getGeoPosition from './getGeoPosition.js';


const serchForm = document.getElementById('search-form');
serchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('e.currentTarget.elements.city.value :', e.currentTarget.elements.city.value);
  fetchWeather(e.currentTarget.elements.city.value)
  .then(data => {
    console.log('fetch', data);
    render(data)
  });
});


getGeoPosition().then(data => {
  console.log('data', data);
  fetchWeather(data)
  .then(data => {
    console.log('fetch', data);
    render(data)
  });
})

function render(data) {
  document.querySelector('[data-field="conditions"]').textContent = data.current.condition.text;
  document.querySelector('.icon').textContent = data.current.condition.icon;
  document.querySelector('[data-field="wind"]').textContent = `${data.current.wind_kph}kph`;
  document.querySelector('[data-field="location"]').textContent = data.location.name;
  document.querySelector('[data-field="temp"]').textContent = `${data.current.temp_c }\u2103 `;
  document.querySelector('[data-field="humidity"]').textContent =`${ data.current.humidity }%`;
  
}