// Inicializar Feather Icons
feather.replace();

const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Troca o ícone do botão dependendo do tema
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i data-feather="sun"></i>'; // Ícone de sol
    } else {
        toggleButton.innerHTML = '<i data-feather="moon"></i>'; // Ícone de lua
    }

    // Re-inicializa o Feather Icons após alterar o ícone
    feather.replace();
});