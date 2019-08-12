import './styles.css';
import menuJson from './menu.json';
import menuTemplaite from './templates/template.hbs';

const restoranMenu = document.querySelector('.menu');
const body = document.body;

// console.log('menuTemplaite() :', menuTemplaite(menuJson[2]));

let markup = menuJson
  .map(el => {
    return menuTemplaite(el);
  })
  .join('');

console.log('markup ', markup);

restoranMenu.insertAdjacentHTML('afterbegin', markup);

const toggleSwitch = document.getElementById('theme-switch-control');
const currentTheme = localStorage.getItem('theme');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggleSwitch.addEventListener('change', function(ev) {
  if (body.classList.contains(Theme.DARK)) {
    body.classList.remove(Theme.DARK);
  } else {
    body.classList.add(Theme.DARK);
  }
});
