function info() { //Função que vai mostrar a data e hora de acordo com o sistema
    let agora = new Date
    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>O que recebi do sistema foi <mark>${agora}</mark></p>`
}