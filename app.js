<script src="app.js"></script>
<script src="perguntas.js"></script>
let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
