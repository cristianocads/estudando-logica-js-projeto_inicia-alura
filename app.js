alert("Jogo qual é o número");
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 30");

if (chute == numeroSecreto) {
    alert(`Isso aí! Você acertou o número ${numeroSecreto}`);
} else {
    alert("Você errou:(")
}