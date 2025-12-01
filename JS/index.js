// #botoesFundo :is(#btnBanner1, #btnBanner2)
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})

window.addEventListener('resize', function () {
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})

window.addEventListener('load', function () {
    document.getElementById('btnBanner1').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner1').style.transform = 'translateY(-50%) scaleX(-1)'
    document.getElementById('btnBanner2').style.top = (document.querySelector('.fundo').offsetHeight / 2 * -1) + "px";
    document.getElementById('btnBanner2').style.transform = 'translateY(-50%)'
})


window.addEventListener('resize', function () {
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
    } else if (document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.nextElementSibling.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/ChatGPT Image.png')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/ChatGPT Image.png')"
        document.querySelector('.fundo').style.backgroundPositionY = '20%'
    } else {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundPositionY = '0'
    }
}

function prevBan() {
    if (document.querySelector('.fundo').querySelector('div').firstElementChild.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').lastElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/ChatGPT Image.png')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/ChatGPT Image.png')"
    } else if (document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.contains('on')) {
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner1.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner1.jpg')"
    } else {
        document.querySelector('.fundo').querySelector('div').lastElementChild.classList.remove('on')
        document.querySelector('.fundo').querySelector('div').firstElementChild.nextElementSibling.classList.add('on')
        // document.querySelector('.fundo').style.backgroundImage = "url('/ISOKAN/IMG/banner2.jpg')"
        document.querySelector('.fundo').style.backgroundImage = "url('../IMG/banner2.jpg')"
    }
}
const trocaBanner = setInterval(proxBan, 20000)


// Carrosel do index 

/* Adicionamos um 'DOMContentLoaded' para garantir que o script
  só rode depois que todo o HTML foi carregado.
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona TODOS os containers de slider na página
    const slidersContainers = document.querySelectorAll('.container-slider')

    // 2. Para cada container encontrado, aplica a lógica independentemente
    slidersContainers.forEach(container => {

        // Busca elementos DENTRO deste container específico
        const track = container.querySelector('.slider-track')
        const btnPrev = container.querySelector('.btn-voltar')
        const btnNext = container.querySelector('.btn-avancar')
        // Pega apenas os slides deste container
        const slides = Array.from(track.querySelectorAll('.slider'))

        if (slides.length === 0) return; // Segurança caso esteja vazio

        let currentIndex = 0
        let slidesPorVez = 3
        const totalSlides = slides.length

        // Função para verificar tamanho da tela (Interna ao loop)
        function checkWidth() {
            if (window.innerWidth <= 600) {
                slidesPorVez = 2;
            } else {
                slidesPorVez = 3;
            }
            updateSlider() // Realinha ao redimensionar
        }

        // Pega a largura do primeiro slide deste grupo
        function getSlideWidth() {
            return slides[0].offsetWidth
        }

        // Move o trilho
        function updateSlider() {
            // margin-left ou gap precisa ser considerado. 
            // Se o CSS tem margin: 0 0.5rem, o espaço total é largura + 16px (aprox)
            const gap = 15
            const slideWidth = getSlideWidth()
            const distancia = (slideWidth + gap) * currentIndex

            track.style.transform = `translateX(-${distancia}px)`
        }

        // Evento Botão Avançar
        btnNext.addEventListener('click', () => {
            // Se tiver menos slides que a visão, não faz nada
            if (totalSlides <= slidesPorVez) return

            currentIndex++;
            // Lógica de Loop infinito ajustada
            if (currentIndex > totalSlides - slidesPorVez) {
                currentIndex = 0
            }
            updateSlider()
        });

        // Evento Botão Voltar
        btnPrev.addEventListener('click', () => {
            // Se tiver menos slides que a visão, não faz nada
            if (totalSlides <= slidesPorVez) return

            currentIndex--
            if (currentIndex < 0) {
                currentIndex = totalSlides - slidesPorVez
            }
            updateSlider()
        });

        // Inicializa e observa redimensionamento
        checkWidth()
        window.addEventListener('resize', checkWidth);
    });


    // --- CÓDIGO DO MODAL
    const modal = document.getElementById("modal-galeria")
    const modalImg = document.getElementById("modal-img")
    const modalTitulo = document.getElementById("modal-titulo")
    const modalDescricao = document.getElementById("modal-descricao")
    const closeBtn = document.querySelector(".close-btn")

    const allSlides = document.querySelectorAll('.slider')

    allSlides.forEach(slide => {
        slide.addEventListener('click', () => {
            const imgElement = slide.querySelector('img');
            const tituloElement = slide.querySelector('h4');
            const textoLongo = slide.getAttribute('data-descricao');
            const textoCurto = slide.querySelector('p') ? slide.querySelector('p').textContent : ''

            if (imgElement && tituloElement) {
                modalImg.src = imgElement.src
                modalImg.alt = imgElement.alt
                modalTitulo.textContent = tituloElement.textContent
                modalDescricao.textContent = textoLongo || textoCurto
                modal.style.display = "flex"
            }
        })
    })

    closeBtn.addEventListener('click', () => modal.style.display = "none");
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = "none"
    })
})