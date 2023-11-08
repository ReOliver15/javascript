function media() {
    let nom = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2) /2  // números entre parenteses para calcular primeiro a soma, depois a divisão

    let msg //Cria uma variável e deixa vazia
    if (med >= 6) { //Se a média for 6.0 ou mais...
        msg = 'Meus parabéns!'
    } else {  //senão
        msg = 'Estude muito mais!' 
    }
     // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

     let res = window.document.getElementById('situacao')
     res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
     res.innerHTML += `<p>As notas obtidias foram ${n1} e ${n2}.</p>`
     res.innerHTML += `A média final será ${med}.</p>`
     res.innerHTML += `<p>A mensagem que temos é: <strong style='color: blue;'>${msg}</strong>`
}