function maior() {
    let num1 = Number(window.prompt('Digite um número: '))
    let num2 = Number(window.prompt('Digite outro número: '))

    let res = document.querySelector('section#saida')
    if (num1 > num2) {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}, o maior valor é <strong>${num1}</strong></p>`
    } else if (num1 < num2) {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
}