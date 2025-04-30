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
