function enviarResenha() {
    let titulo = document.getElementById("titulo-resenha").value
    let autor = document.getElementById("nome-autor").value
    let texto = document.getElementById("texto-resenha").value
    let data = document.getElementById("data-resenha").value

    if (titulo == '' || autor == '' || texto == '') return

    // Formatar a data para dd/mm/aaaa
    let dataFormatada = ''
    if (data) {
        let partesData = data.split('-')  // Separa: ['aaaa', 'mm', 'dd']
        dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0]
    }

    let container = document.getElementById("containerResenha")

    let card = document.createElement("div")
    card.classList.add('estilo-card')
    card.style.display = 'block'

    let cardTitulo = document.createElement("h3")
    cardTitulo.classList.add('titulo-card')
    cardTitulo.innerText = titulo

    let cardTexto = document.createElement("p")
    cardTexto.classList.add('texto-card')
    cardTexto.innerText = texto

    let cardAutor = document.createElement("p")
    cardAutor.classList.add('autor-card')
    cardAutor.innerText = autor + (dataFormatada ? ", " + dataFormatada : "")

    card.appendChild(cardTitulo)
    card.appendChild(cardTexto)
    card.appendChild(cardAutor)
    
    container.appendChild(card)

    document.getElementById('titulo-resenha').value = ''
    document.getElementById('nome-autor').value = ''
    document.getElementById('texto-resenha').value = ''
    document.getElementById('data-resenha').value = ''
}