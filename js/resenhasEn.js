let avaliacaoSelecionada = 0;

document.addEventListener('DOMContentLoaded', function() {
    const estrelas = document.querySelectorAll('.estrela');
    
    estrelas.forEach(estrela => {
        // Hover effect
        estrela.addEventListener('mouseenter', function() {
            const valor = parseInt(this.getAttribute('data-valor'));
            destacarEstrelas(valor);
        });
        
        // Click para selecionar
        estrela.addEventListener('click', function() {
            avaliacaoSelecionada = parseInt(this.getAttribute('data-valor'));
            document.getElementById('avaliacao-estrelas').value = avaliacaoSelecionada;
            selecionarEstrelas(avaliacaoSelecionada);
        });
    });
    
    // Quando o mouse sair do container, mostrar a seleção atual
    document.querySelector('.container-estrelas').addEventListener('mouseleave', function() {
        selecionarEstrelas(avaliacaoSelecionada);
    });
});

function destacarEstrelas(valor) {
    const estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach((estrela, index) => {
        if (index < valor) {
            estrela.classList.add('ativa');
        } else {
            estrela.classList.remove('ativa');
        }
    });
}

function selecionarEstrelas(valor) {
    const estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach((estrela, index) => {
        estrela.classList.remove('ativa');
        if (index < valor) {
            estrela.classList.add('selecionada');
        } else {
            estrela.classList.remove('selecionada');
        }
    });
}

function enviarResenha() {
    let avaliacao = document.getElementById("avaliacao-estrelas").value
    let autor = document.getElementById("nome-autor").value
    let texto = document.getElementById("texto-resenha").value

    if (autor == '' || texto == '') {
        alert('Please fill in the name and review text!');
        return;
    }

    // Pegar a data atual automaticamente
    let dataAtual = new Date()
    let dia = String(dataAtual.getDate()).padStart(2, '0')
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
    let ano = dataAtual.getFullYear()
    let dataFormatada = mes + '/' + dia + '/' + ano

    let container = document.getElementById("containerResenha")

    let card = document.createElement("div")
    card.classList.add('estilo-card')
    card.style.display = 'block'

    // Criar as estrelas para o card
    let cardEstrelas = document.createElement("div")
    cardEstrelas.classList.add('estrelas-card')
    for (let i = 0; i < 5; i++) {
        if (i < parseInt(avaliacao)) {
            cardEstrelas.innerHTML += '★'
        } else {
            cardEstrelas.innerHTML += '☆'
        }
    }

    let cardTexto = document.createElement("p")
    cardTexto.classList.add('texto-card')
    cardTexto.innerText = texto

    let cardAutor = document.createElement("p")
    cardAutor.classList.add('autor-card')
    cardAutor.innerText = autor + ", " + dataFormatada

    card.appendChild(cardEstrelas)
    card.appendChild(cardTexto)
    card.appendChild(cardAutor)
    
    container.prepend(card)

    // Limpar campos
    document.getElementById('avaliacao-estrelas').value = '0'
    document.getElementById('nome-autor').value = ''
    document.getElementById('texto-resenha').value = ''
    avaliacaoSelecionada = 0
    selecionarEstrelas(0)
}