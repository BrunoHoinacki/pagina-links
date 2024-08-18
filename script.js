window.onload = function() {
    const audio = document.getElementById('background-audio');
    const toggleBtn = document.getElementById('toggle-music-btn');
    const toggleIcon = document.getElementById('toggle-music-icon');
    const colorModeToggle = document.getElementById('color-mode-toggle');

    // Função para tocar a música após 5 segundos
    setTimeout(() => {
        audio.play().catch((error) => {
            console.log("Erro ao tentar tocar a música: ", error);
        });
    }, 2000);

    // Função para alternar o estado da música
    toggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.log("Erro ao tentar tocar a música: ", error);
            });
            toggleIcon.setAttribute('data-icon', 'mdi:music-off');
        } else {
            audio.pause();
            toggleIcon.setAttribute('data-icon', 'mdi:music');
        }
    });

    // Função para alternar o modo claro/escuro
    colorModeToggle.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        // Alternar os ícones conforme o modo
        const moonIcon = document.querySelector('.iconify-light');
        const sunIcon = document.querySelector('.iconify-dark');

        if (isDarkMode) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });

    // Inicializar o modo correto ao carregar a página
    const isDarkMode = document.documentElement.classList.contains('dark');
    const moonIcon = document.querySelector('.iconify-light');
    const sunIcon = document.querySelector('.iconify-dark');

    if (isDarkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
};
