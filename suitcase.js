// Visit Counter with Local Storage

let visitCounter = Number(localStorage.getItem('visits')) || 0;
visitCounter++;
localStorage.setItem('visits', visitCounter);
document.querySelector('.visitCountP').textContent = `Visit Counter: ${visitCounter}`;

//Change theme

const themeChangeBut = document.querySelector('.themeChanger');
const StyleSh = document.getElementById('styles');

//remembering the theme

let themeWas = localStorage.getItem('theme');
if (themeWas === null) {
    StyleSh.setAttribute('href', 'case.css');
    localStorage.setItem('theme', 'case.css');
} else {
    StyleSh.setAttribute('href', themeWas);
}

//click the button ThemeChanger
themeChangeBut.addEventListener('click', () => {
    const styleHref = StyleSh.getAttribute('href');
    if (styleHref === 'case.css') {
        StyleSh.setAttribute('href', 'caseDark.css');
        localStorage.setItem('theme', 'caseDark.css');
    } else {
        StyleSh.setAttribute('href', 'case.css');
        localStorage.setItem('theme', 'case.css');
    };
});

//Music alert
const MusBut = document.querySelector('.musicBut');
MusBut.addEventListener('click', () => {
    alert('I have no resume, but I have a song bbno$-resume')
});