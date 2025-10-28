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
    return slides[0].getBoundingClientRect().width;
}

// Atualiza a posição do trilho
function updateSlider() {
    const distancia = getSlideWidth() * currentIndex;
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



// O nome da função e prevSlide e não antSlide





// const slider = document.querySelectorAll('.slider')
// const btnPrev = document.getElementById('voltar')
// const btnNext = document.getElementById('avancar')

// let slideAtivos = []

// function esconderSlide() {
//     slider.forEach(item => item.classList.remove('on'))
// }

// function mostrarSlide() {
//     slideAtivos.forEach(slideAtivo => {
//         slider[slideAtivo].classList.add('on')
//     });
// }

// function nextSlide() {
//     esconderSlide()
//     if(slideAtivos[slideAtivo.length - 1] == slider.length - 1) {
//         const indices = slideAtivos.keys()
//         slideAtivos = Array.from(indices).map(i => i < slideAtivos.length ? i : i - slider.length)
//     } else {
//         const indices = slideAtivos.keys()
//         slideAtivos = Array.from(indices).map(i => i < slideAtivos.length ? i : i - slider.length)
//     }
//     mostrarSlide()
// }

// function prevSlide() {
//     esconderSlide()
//     if(slideAtivo == 0) {
//         slideAtivo = slider.length -1
//     } else {
//         slideAtivo--
//     }
//     mostrarSlide()
// }

// slideAtivoAtual está entre 0 e 4
const slide = 0

function proxSlide(slideAtivoAtual) {
    document.getElementById('container-img').querySelectorAll('slider')[slideAtivoAtual].classList.remove('on')
    if (slideAtivoAtual <= document.getElementById('container-img').querySelector('slider').length - 4) {
        document.getElementById('container-img')[slideAtivoAtual].nextElementSibling.nextElementSibling.classList.add('on')
        slide = slideAtivoAtual + 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 3) {
        document.getElementById('container-img').firstElementChild.classList.add('on')
        slide = slideAtivoAtual + 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 2) {
        document.getElementById('container-img').firstElementChild.nextElementSibling.classList.add('on')
        slide = slideAtivoAtual + 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 1) {
        document.getElementById('container-img').firstElementChild.nextElementSibling.nextElementSibling.classList.add('on')
        slide = 0
    }
}

function antSlide(slideAtivoAtual) {
    if (slideAtivoAtual <= document.getElementById('container-img').querySelectorAll('slider').length - 4) {
        document.getElementById('container-img')[slideAtivoAtual + 2].classList.remove('on')
        if (slideAtivoAtual == 0) {
            document.getElementById('container-img').lastElementChild.classList.add('on')
            slide = document.getElementById('container-img').querySelectorAll('slider').length - 1
        } else {
            document.getElementById('container-img')[slideAtivoAtual - 1].classList.add('on')
            slide = slideAtivoAtual - 1
        }
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 3) {
        document.getElementById('container-img').lastElementChild.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual - 1].classList.add('on')
        slide = slideAtivoAtual - 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 2) {
        document.getElementById('container-img').firstElementChild.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual - 1].classList.add('on')
        slide = slideAtivoAtual - 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 1) {
        document.getElementById('container-img').firstElementChild.nextElementSibling.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual - 1].classList.add('on')
        slide = slideAtivoAtual - 1
    }
}

// está dando erro em classList 