var cota = Number(window.prompt('Primeiro digite o valor da cotação atual do dólar: '));

function converter() {
    let reais = Number(window.prompt('Quantos R$ você tem na carteira?'));
    let dolarAtual = reais * cota

    let res = document.querySelector('section#res');
    res.innerHTML = `<p>Com o valor de  R$ ${reais} reais você consegue comprar US$ ${dolarAtual} dólares.</p>`;
}
