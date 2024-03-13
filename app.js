alert("Jogo qual é o número");
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 30");
console.log('Valor do chute:', chute);

if (chute == numeroSecreto) {
    alert(`Isso aí! Você acertou o número ${numeroSecreto}`);
} else {
    alert("Você errou:(")
}



// Adicionando uma condicional para dia de semana.
let dia = prompt("qual o dia da semana?");

if (dia == "Sábado" || dia == "Domingo") {
    alert("Bom fim de semana");
} else {
    alert("Boa semana");
}