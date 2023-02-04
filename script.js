// Desafio 3
// Fazer com que exista um número máximo de tantativas. (10 tentativas)

var numeroSecreto = parseInt(Math.random() * 1000) + 1;

var tentativa = 1
var tentativaMax = 10

while (chute != numeroSecreto && tentativa <= tentativaMax) {
    var chute = prompt('Digite um número entre 0 e 1000! Você tem 10 tentativas.')
    if (chute == numeroSecreto) {
        alert('Acertou!')
    } else if (chute > numeroSecreto) {
        alert(`Errou! O número secreto é menor que ${chute}. Tentativa número: ${tentativa++}`)
    } else {
        alert(`Errou! O número secreto é maior que ${chute}. Tentativa número: ${tentativa++}`)
    }
}


if (tentativa > tentativaMax) {
    alert(`Você perdeu, o número era ${numeroSecreto}!`)
}



