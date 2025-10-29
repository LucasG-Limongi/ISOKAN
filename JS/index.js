$('.menu-mobile i').click(function () {
    $('.nav-mobile').slideToggle();
})

$(window).resize(function () {
    if ($(window).width < 900) {
        $('.nav-mobile, .menu-mobile').css('display', 'none')
        $('.nav').css('display', 'flex')
    }
}) // tentativa de corrigir o bug do menu mobile que aparece no desktop

// Carrosel do index 

/* Adicionamos um 'DOMContentLoaded' para garantir que o script
  só rode depois que todo o HTML foi carregado.
*/

const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slider'));
const btnPrev = document.getElementById('voltar');
const btnNext = document.getElementById('avancar');

let currentIndex = 0;
const slidesPorVez = 3; // número de slides visíveis
const totalSlides = slides.length;

// Função que calcula o deslocamento exato
function getSlideWidth() {
    return slides[0].offsetWidth;
}

// Atualiza a posição do trilho
function updateSlider() {
    const distancia = (getSlideWidth() + 15) * currentIndex;
    track.style.transform = `translateX(-${distancia}px)`;
}

// Avançar (com looping infinito)
btnNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalSlides - slidesPorVez) {
        currentIndex = 0; // volta pro início
    }
    updateSlider();
});

// Voltar (com looping infinito)
btnPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesPorVez; // volta pro final
    }
    updateSlider();
});

// Redimensionamento dinâmico (mantém proporção)
window.addEventListener('resize', updateSlider);
