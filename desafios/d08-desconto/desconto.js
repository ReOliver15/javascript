function calcularDesc() {
    var prod = window.prompt('Qual é o produto que você está comprando?'); //ex: relogio
    var precoString = window.prompt(`Qual é o preço de ${prod}`);

    var precoProd = parseFloat(precoString.replace(',','.')); //Substitui virgula por ponto

    var desconto = (precoProd * 10) / 100
    var precoFinal = precoProd - desconto

    var parag = document.querySelector('section#parag');
    parag.innerHTML = `<p><strong>Calculando desconto de 10% para ${prod} </strong></p>` +
    `<p>O preço original era R$ ${precoProd.toFixed(2)}.</p>` +
    `<p>Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto -(10%).</p>` +
    `<p>No fim, você vai pagar R$ ${precoFinal.toFixed(2)} no produto ${prod}.</p>`;
}