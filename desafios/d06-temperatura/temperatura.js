function converterTemperatura() {
    var tempc = Number(window.prompt('Digite uma temperatura em °C(Celsius)'));
    var tempf = (tempc * 1.8) + 32
    var tempk = tempc + 273

    let res = document.querySelector('section#res')
    res.innerHTML = `<p><strong>A temperatura de ${tempc}°C, corresponde a...</strong></p>`;
    res.innerHTML += `<p>${tempk} °K (Kelvin)</p>`;
    res.innerHTML += `<p>${tempf}°F (Fahrenheit)</p>`;
}