// 7 Faça um programa que peça ao usuário para digitar um número inteiro. Se o número
// for positivo, exiba uma mensagem informando que o número é positivo. Se o número for
// negativo, exiba uma mensagem informando que o número é negativo. Se o número for
// igual a zero, exiba uma mensagem informando que o número é zero. (Aplicar no Console). 

//exercicio 7
let num1 = Number(prompt(`digitar um número inteiro`));
if(num1 == 0){
    alert(`O numero digitado é 0`)
}else if (num1 > 0){
    alert(`O numero digitado é positivo`)
}else{
    alert(`o numero é negativo`)
}
   
