// 2 - Utilizando os conceitos apresentados, pergunte ao usuário.
// • Qual o nome do usuário;
// • Qual sua idade;
// • Bairro onde mora;
// • Passe o nome do usuário para todas as letras em maiúscula.
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o
// resultado da soma desses números na tela. 

//exericio2 a/b/c/d
let nome = prompt('qual o seu nome');
let idade = prompt('qual sua idade');
let bairro = prompt('Bairro onde mora?');
console.log(nome.toUpperCase());


//exercicio 2 e
let int = Number(prompt('digite um número inteiro '))
let int1 = Number(prompt('digite outro número inteiro '))
alert(`A soma de ${int} e ${int1} é de ${int + int1}`);