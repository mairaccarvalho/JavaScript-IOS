// 8 Atividades relacionais: crie um programa que solicite ao usuário que digite a sua
// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve calcular o
// índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e
// verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve
// imprimir na tela se o IMC está dentro do intervalo saudável ou não. 


let peso = Number(prompt('Digite sue peso (kg)'));
let altura = Number(prompt('Digite sua altura (cm)'));
let imc = (peso / (altura * altura)).toFixed(2);
if(imc >= 18.5 && imc <24.9){
    alert(`Voce esta saudavel. Seu IMC é de ${imc}`)
}else {
    alert(`Voce não esta saudavel. Seu IMc é de ${imc}`)
}