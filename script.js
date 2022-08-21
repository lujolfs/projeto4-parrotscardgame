var numero = 0;

distriCartas(prompt("Com quartas cartas deseja jogar? Insira um número par de 4 a 14!"));

function distriCartas(numero) {
    while (numero % 2 != 0 || numero > 14 || numero < 4) {
        numero = prompt("Por favor, escolha um número par de 4 a 14.");
    }

    const tabuleiro = document.querySelector(".tabuleiro");
    tabuleiro.innerHTML = "";

    for (let i = 0; i < numero; i++) {
        tabuleiro.innerHTML += "<li class=capa><img src='imagens/capa.png'></li>"
    }
}