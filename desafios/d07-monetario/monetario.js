var cota = Number(window.prompt('Digite o valor da cotação atual do dólar: '));

function converter() {
    let reais = Number(window.prompt('Quantos R$ você tem na carteira?'));
    let dolarAtual = reais * cota

    let sect = document.querySelector('section#sect');
    sect.innerHTML = `<p>Com o valor de  R$ ${reais} reais você consegue comprar US$ ${dolarAtual} dólares.</p>`;
}
