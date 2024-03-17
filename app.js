alert("Jogo qual é o número");
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute ;
console.log('Valor do chute:', chute);


// Enquanto
// != (não for igual, diferente)
// ==  (uma variável de valor igual a outro)
while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 30");

    if (chute == numeroSecreto) {
        alert(`Isso aí! Você acertou o número ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        alert("Você errou:(")
    }
}


// Exercício 2
// Adicionando uma condicional para dia de semana.
let dia = prompt("qual o dia da semana?");

if (dia == "Sábado" || dia == "Domingo") {
    alert("Bom fim de semana");
} else {
    alert("Boa semana");
}