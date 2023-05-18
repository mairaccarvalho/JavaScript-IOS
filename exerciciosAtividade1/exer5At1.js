// 5 Faça um programa conferir sua idade. Se a idade for menor do que 18 anos, exiba
// uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior
// do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário
// é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando
// que o usuário é idoso. 



//exercicio 5 
let idade2 = Number(prompt('Digite sua idade'))
if(idade2 <18){
    alert(`O usuário é menor de idade. Voce tem ${idade2} anos`)
}else if (idade2  <60){
    alert(`Voce é adulto. Voce tem ${idade2} anos`)
}else{
    alert(`Voce ja é idoso. Voce tem ${idade2} anos`)
}