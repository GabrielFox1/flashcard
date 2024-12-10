function criaCartao(topico, questao, solucao) {
    let conteiner = document.getElementById('conteiner')
    let carta = document.createElement('article')
    carta.className = 'carta'

    carta.innerHTML = `
    <div class="carta__conteudo">
        <h3>${topico}</h3>
        <div class="carta__conteudo__questao">
            <p>${questao}</p>
        </div>
        <div class="carta__conteudo__solucao">
            <p>${solucao}</p>
        </div>
    </div>
    `

    let solucaoEstaVisivel = false

    function viraCarta() {
        solucaoEstaVisivel = !solucaoEstaVisivel
        carta.classList.toggle('ativa', solucaoEstaVisivel)
    }
    carta.addEventListener('click', viraCarta)

    conteiner.appendChild(carta)
}
