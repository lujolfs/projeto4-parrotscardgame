var numero = 0;
const imagens = ['imagens/carta1.gif', 'imagens/carta2.gif', 'imagens/carta3.gif', 'imagens/carta4.gif', 'imagens/carta5.gif', 'imagens/carta6.gif', 'imagens/carta7.gif'];
let conVirada = 0;
let cartaClicada = 0;
let contagemErro = 0;
let pontos = 0;

distriCartas(prompt("Com quartas cartas deseja jogar? Insira um número par de 4 a 14!"));

function distriCartas(numero) {
    while (numero % 2 != 0 || numero > 14 || numero < 4) {
        numero = prompt("Por favor, escolha um número par de 4 a 14.");
    }

    const tabuleiro = document.querySelector(".jogo-da-memoria");
    tabuleiro.innerHTML = "";

    for (let i = 0; i < numero; i++) {
        tabuleiro.innerHTML += "<div class=carta-memoria onclick='virarCarta(this)'><img class='frente' src='imagens/capa.png'><img class='costas' src='imagens/carta1.gif'></div>";
    }
}

function virarCarta(carta) {
    if (conVirada == 0) {
        carta.classList.add('virada');
        conVirada++;
    } else if (conVirada == 1 && carta.classList.contains('virada')) {
        alert("Escolha uma carta diferente!");
    } else if (conVirada == 1) {
        carta.classList.add('virada-1');
        conVirada++;
    }
}



