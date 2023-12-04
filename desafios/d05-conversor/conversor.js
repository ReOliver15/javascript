function converterDistancia() {
    var distMetros = window.prompt('Digite a distancia em metros: ');

    var parag = document.querySelector('#texto');
    parag.textContent = `A distância de ${distMetros} metros, é igual a...`

    //Converte a distancia para as outras medidas
    var km = distMetros / 1000;
    var hm = distMetros / 100;
    var dam = distMetros / 10;
    var dm = distMetros * 10;
    var cm = distMetros * 100;
    var mm = distMetros * 1000;

    var resultados = `<p>Distância em quilômetros: ${km} km</p>
    <p>Distância em hectômetros: ${hm} hm</p>
    <p>Distância em decâmetros: ${dam} dam</p>
    <p>Distância em decímetros: ${dm} dm</p>
    <p>Distância em centímetros: ${cm} cm</p>
    <p>Distância em milímetros: ${mm} mm</p>`

    //Agora insere os resultados na div com id "resultados"
    document.getElementById('resultados').innerHTML = resultados;
}