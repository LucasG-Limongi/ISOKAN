$('.menu-mobile i').click(function () {
    $('.nav-mobile').slideToggle();
})

$(window).resize(function() {
    if ($(window).width < 900) {
        $('.nav-mobile, .menu-mobile').css('display', 'none')
        $('.nav').css('display', 'flex')
    }
}) // tentativa de corrigir o bug do menu mobile que aparece no desktop

// Carrosel do index 

const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('voltar')
const btnNext = document.getElementById('avancar')

let slideAtivo = 0

function esconderSlide() {
    slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlide() {
    slider[slideAtivo].classList.add('on')
}

function nextSlide() {
    esconderSlide()
    if(slideAtivo == slider.length - 1) {
        slideAtivo = 0
    } else {
        slideAtivo++
    }
    mostrarSlide()
}

function prevSlide() {
    esconderSlide()
    if(slideAtivo == 0) {
        slideAtivo = slider.length -1
    } else {
        slideAtivo--
    }
    mostrarSlide()
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)