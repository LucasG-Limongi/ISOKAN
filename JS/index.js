$('.menu-mobile i').click(function () {
    $('.nav-mobile').slideToggle();
})

// #botoesFundo :is(#btnBanner1, #btnBanner2)
window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})

window.addEventListener('resize', function(){
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})

window.addEventListener('load', function(){
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})


window.addEventListener('resize', function(){
    if (window.innerWidth > 900) {
        document.querySelector('.nav-mobile').style.display = 'none'
        document.querySelector('.menu-mobile').style.display = 'none'
        document.querySelector('.nav').style.display = 'flex'
        // console.log('ok1')
    } else {
        document.querySelector('.menu-mobile').style.display = 'block'
        document.querySelector('.nav').style.display = 'none'
        // console.log('ok2')
    }
})

// Carrosel do banner
function proxBan() {
    if (document.querySelector('.fundo').querySelector('div').firstElementChild.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner2.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner2.jpg')"
        document.querySelector('.fundo').style.backgroundPositionY = '0'
        // document.getElementById('banner').setAttribute('src', './IMG/banner2.jpg')
    } else if (document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.nextElementSibling.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner3.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/ChatGPT Image.png')"
        document.querySelector('.fundo').style.backgroundPositionY = '20%'
        // document.getElementById('banner').setAttribute('src', './IMG/banner3.jpg')
    } else {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundPositionY = '0'
        // document.getElementById('banner').setAttribute('src', './IMG/banner1.jpg')
    }
}

function prevBan() {
    if (document.querySelector('.fundo').querySelector('div').firstElementChild.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').lastElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner3.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/ChatGPT Image.png')"
        // document.getElementById('banner').setAttribute('src', './IMG/banner2.jpg')
    } else if (document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner1.jpg')"
        // document.getElementById('banner').setAttribute('src', './IMG/banner3.jpg')
    } else {
        document.querySelector('.fundo').querySelector('div').lastElementChild.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner2.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner2.jpg')"
        // document.getElementById('banner').setAttribute('src', './IMG/banner1.jpg')
    }
}
const trocaBanner = setInterval(proxBan, 20000)


// Carrosel do index 

/* Adicionamos um 'DOMContentLoaded' para garantir que o script
  só rode depois que todo o HTML foi carregado.
*/

const track = document.querySelector('.slider-track',);
const slides = Array.from(document.querySelectorAll('.slider'));
const btnPrev = document.getElementById('voltar');
const btnNext = document.getElementById('avancar');

let currentIndex = 0;
let slidesPorVez = 3
document.addEventListener('DOMContentLoaded', () => {
    if (Number(window.innerWidth) <= 600) {
        console.log(Number(window.innerWidth))
        slidesPorVez = 2; // número de slides visíveis
    } else {
        console.log(Number(window.innerWidth))
        slidesPorVez = 3;
    }
})
window.addEventListener('resize', () => {
    if (Number(window.innerWidth) <= 600) {
        console.log(Number(window.innerWidth))
        slidesPorVez = 2;
    } else {
        console.log(Number(window.innerWidth))
        slidesPorVez = 3;
    }
})
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