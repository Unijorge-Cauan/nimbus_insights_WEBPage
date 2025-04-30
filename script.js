// document.addEventListener('DOMContentLoaded', () => {});

const slidesContainer = document.querySelector('.carousel-slides');
const slides = Array.from(document.querySelectorAll('.carousel-item'));
const btnPrev = document.querySelector('.carousel-control.prev');
const btnNext = document.querySelector('.carousel-control.next');
console.log('btnPrev →', btnPrev, '\nbtnNext →', btnNext);

/* posição inicial*/
let currentIndex = 0;

/* Função para atualizar a posição do container */
function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

/* deslocamento*/
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

/* clique */
  btnPrev.addEventListener('click', () => showSlide(currentIndex - 1));
  btnNext.addEventListener('click', () => showSlide(currentIndex + 1));

  showSlide(0);

/*DarkMode*/ 
const btnDarkMode = document.querySelector('.darkMode');
const icon = btnDarkMode.querySelector('i');
const body = document.body;

// Aplica o tema salvo e ícone correspondente
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    body.classList.toggle('dark-mode', isDark);
    icon.classList.replace('bi-sun-fill', isDark ? 'bi-sun-fill' : 'bi-moon-fill');
});

// Alterna entre dark/light mode e o ícone
btnDarkMode.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');

    icon.classList.replace(isDark ? 'bi-moon-fill' : 'bi-sun-fill', isDark ? 'bi-sun-fill' : 'bi-moon-fill');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});