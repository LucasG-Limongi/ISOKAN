function enviarResenha() {
    let titulo = document.getElementById("titulo-resenha").value
    let autor = document.getElementById("nome-autor").value
    let texto = document.getElementById("texto-resenha").value


    if (titulo == '' || autor == '' || texto == '') return

    let container = document.getElementById("containerResenha")

    let card = document.createElement("div")
    card.classList.add('input')

    let cardTitulo = document.createElement("h3")
    cardTitulo.classList.add('titulo-resenha-classe')
    cardTitulo.innerText = titulo

    let cardAutor = document.createElement("p")
    cardAutor.classList.add('autor-resenha-classe')
    cardAutor.innerText = "Por:" + autor

    let cardTexto = document.createElement("p")
    cardTexto.classList.add('texto-resenha-classe')
    cardTexto.innerText = texto

    card.appendChild(cardTitulo)
    card.appendChild(cardAutor)
    card.appendChild(cardTexto)
    
    container.appendChild(card)

    document.getElementById('titulo').innerText = ''
    document.getElementById('autor').innerText = ''
    document.getElementById('texto').innerText = ''
}