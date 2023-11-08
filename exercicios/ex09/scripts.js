let contador = 0
let res = window.document.querySelector('section#result')
//As variáveis declaradas aqui fora são GLOBAIS e funcionam no programa inteiro

function contar() {
    contador ++ //É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <strong>${contador}</strong> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}