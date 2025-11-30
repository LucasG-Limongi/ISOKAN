// Adicione no início do arquivo ou antes da função enviarResenha
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
    let data = document.getElementById("data-resenha").value


    if (autor == '' || texto == '') {
        alert('Por favor, preencha o nome e o texto da resenha!');
        return;
    }

    // Formatar a data para dd/mm/aaaa
    let dataFormatada = ''
    if (data) {
        let partesData = data.split('-')
        dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0]
    }

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
    cardAutor.innerText = autor + (dataFormatada ? ", " + dataFormatada : "")

    card.appendChild(cardEstrelas)
    card.appendChild(cardTexto)
    card.appendChild(cardAutor)
    
    container.appendChild(card)

    // Limpar campos
    document.getElementById('avaliacao-estrelas').value = '0'
    document.getElementById('nome-autor').value = ''
    document.getElementById('texto-resenha').value = ''
    document.getElementById('data-resenha').value = ''
    avaliacaoSelecionada = 0
    selecionarEstrelas(0)
}