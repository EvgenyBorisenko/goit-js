import './styles.css';
import menuJson from './menu.json';
import menuTemplaite from './templates/template.hbs';

const restoranMenu = document.querySelector('.menu');
const toggleSwitch = document.getElementById('theme-switch-control');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let markup = menuJson
  .map(el => {
    return menuTemplaite(el);
  })
  .join('');

restoranMenu.insertAdjacentHTML('afterbegin', markup);

if (localStorage.getItem('theme') !== null) {
  const currentTheme = localStorage.getItem('theme');
  body.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
} else {
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

toggleSwitch.addEventListener('change', function(ev) {

  if (body.classList.contains(Theme.DARK)) {
    console.log('body.classList.contains(Theme.DARK) :', body.classList.contains(Theme.DARK));
    console.dir(body);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    toggleSwitch.checked = false;
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    toggleSwitch.checked = true;
  }
});
