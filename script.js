document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.carousel-slides');
  const slides = Array.from(document.querySelectorAll('.carousel-item'));
  const btnPrev = document.querySelector('.carousel-control.prev');
  const btnNext = document.querySelector('.carousel-control.next');
  const btnDarkMode = document.querySelector('.darkMode');
  const icon = btnDarkMode.querySelector('i');
  const body = document.body;
  const menuToggle = document.querySelector('.menuToggle');
  const menuLinks = document.querySelector('.menuLinks');
  const menuItems = document.querySelectorAll('.menuLinks a');

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  btnPrev.addEventListener('click', () => showSlide(currentIndex - 1));
  btnNext.addEventListener('click', () => showSlide(currentIndex + 1));
  showSlide(0);

  // Swipe gesture
  let startX = 0;

  slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    const threshold = 30;
    if (deltaX > threshold) {
      showSlide(currentIndex + 1);
    } else if (deltaX < -threshold) {
      showSlide(currentIndex - 1);
    }

    startX = 0;
  });

  // Dark mode
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  body.classList.toggle('dark-mode', isDark);
  icon.classList.replace('bi-sun-fill', isDark ? 'bi-sun-fill' : 'bi-moon-fill');

  btnDarkMode.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    icon.classList.replace(isDark ? 'bi-moon-fill' : 'bi-sun-fill', isDark ? 'bi-sun-fill' : 'bi-moon-fill');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Menu toggle
  menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
  });

  menuItems.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('show');
    });
  });

  // Validação de formulário
  const form = document.getElementById("formContato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    let erros = [];

    if (nome === "") {
      erros.push("O campo Nome é obrigatório.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      erros.push("O campo E-mail é obrigatório.");
    } else if (!emailRegex.test(email)) {
      erros.push("Informe um e-mail válido.");
    }

    if (telefone === "") {
      erros.push("O campo Telefone é obrigatório.");
    }

    if (assunto === "") {
      erros.push("Escolha um assunto para o contato.");
    }

    if (mensagem.length < 10) {
      erros.push("A mensagem deve conter pelo menos 10 caracteres.");
    }

    if (erros.length > 0) {
      alert("Erros encontrados:\n\n" + erros.join("\n"));
    } else {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });
});
