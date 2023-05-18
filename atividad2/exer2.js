// Jogo Adivinhação
// Desenvolva um jogo em JavaScript onde o usuário deve digitar um número de 0 a 10.
// (Prompt)
// Se o usuário acertar o número sorteado, exiba a mensagem "Parabéns, você acertou!".
// Se o usuário errar, exiba a mensagem "Tente novamente" e solicite que o usuário digite
// um novo número. O jogo deve continuar até que o usuário acerte o número sorteado.

let num = Number(prompt("Digite um número de 1 a 10"))
while (num != 7){
num = Number(prompt("Você errou tente novamente"))
}
alert("Você acertou parabéns")