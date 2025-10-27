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

btnNext.addEventListener('click', function(){proxSlide(slide)}) // como passar o slideAtivoAtual aqui?
// o que devo fazer é escrever da seguinte forma: '
btnPrev.addEventListener('click', function(){antSlide(slide)})





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
        document.getElementById('container-img')[slideAtivoAtual+2].classList.remove('on')
        if (slideAtivoAtual == 0) {
            document.getElementById('container-img').lastElementChild.classList.add('on')
            slide = document.getElementById('container-img').querySelectorAll('slider').length - 1
        } else {
            document.getElementById('container-img')[slideAtivoAtual-1].classList.add('on')
            slide = slideAtivoAtual - 1
        }
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 3) {
        document.getElementById('container-img').lastElementChild.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual-1].classList.add('on')
        slide = slideAtivoAtual - 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 2) {
        document.getElementById('container-img').firstElementChild.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual-1].classList.add('on')
        slide = slideAtivoAtual - 1
    } else if (slideAtivoAtual == document.getElementById('container-img').querySelectorAll('slider').length - 1) {
        document.getElementById('container-img').firstElementChild.nextElementSibling.classList.remove('on')
        document.getElementById('container-img')[slideAtivoAtual-1].classList.add('on')
        slide = slideAtivoAtual - 1
    }
}

// está dando erro em classList 