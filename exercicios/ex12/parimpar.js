function teste() { //Função teste() lá do button
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0) { //Se a variável num dividida por 2 for identica a 0
        tipo = '<strong>PAR</strong>' //então a variavel tipo vai receber
    } else { //Senão
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result') //A variável res vai receber o valor
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}</p>` //Essa parte vai substituir o paragrafo lá na section
}