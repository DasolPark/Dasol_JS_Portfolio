const themeOptions = document.querySelectorAll('.theme-option');

const themeInitial = getLocalStorageTheme();

function setTheme(mode) {
  if (mode === 'light' || mode === null) {
    document.getElementById('theme-style').href = './css/default.css';
  } else if (mode === 'blue') {
    document.getElementById('theme-style').href = './css/blue.css';
  } else if (mode === 'green') {
    document.getElementById('theme-style').href = './css/green.css';
  } else if (mode === 'purple') {
    document.getElementById('theme-style').href = './css/purple.css';
  }

  setLocalStorageTheme(mode);
}

function getLocalStorageTheme() {
  return localStorage.getItem('theme');
}

function setLocalStorageTheme(mode) {
  localStorage.setItem('theme', mode);
}

themeOptions.forEach(theme => {
  theme.addEventListener('click', e => {
    const mode = e.target.getAttribute('data-theme');
    setTheme(mode);
  })
})

setTheme(themeInitial);