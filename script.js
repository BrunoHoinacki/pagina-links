window.onload = function() {
    const audio = document.getElementById('background-audio');
    const toggleBtn = document.getElementById('toggle-music-btn');
    const pauseIcon = document.getElementById('pause-icon');
    const playIcon = document.getElementById('play-icon');
    const colorModeToggle = document.getElementById('color-mode-toggle');
    const themeLogo = document.getElementById('theme-logo');

    // Função para tocar a música após 2 segundos
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
            pauseIcon.style.display = 'block';
            playIcon.style.display = 'none';
        } else {
            audio.pause();
            pauseIcon.style.display = 'none';
            playIcon.style.display = 'block';
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

        // Atualizar o logo conforme o tema
        if (isDarkMode) {
            themeLogo.src = '/assets/images/forcoder-logo-dark.png';
        } else {
            themeLogo.src = '/assets/images/forcoder-logo-light.png';
        }

        // Armazenar o tema preferido no armazenamento local
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Inicializar o modo correto ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDarkMode = savedTheme === 'dark';

    document.documentElement.classList.toggle('dark', isDarkMode);

    const moonIcon = document.querySelector('.iconify-light');
    const sunIcon = document.querySelector('.iconify-dark');

    if (isDarkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        themeLogo.src = '/assets/images/forcoder-logo-dark.png';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        themeLogo.src = '/assets/images/forcoder-logo-light.png';
    }

    // Inicializar os ícones do botão de música
    pauseIcon.style.display = 'block';
    playIcon.style.display = 'none';
};
