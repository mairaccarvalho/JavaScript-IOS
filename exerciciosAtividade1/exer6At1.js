// 6 Faça um programa que teste a idade do usuário. Se a idade digitada for maior ou
// igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem "Você
// ainda não pode dirigir

//exercico 6

let idade = Number(prompt('Digite sua idade'))
if(idade >= 18){
    alert(`Você pode dirigir. Voce tem ${idade}`)
}else{
    alert(`Você ainda não pode dirigir. Voce tem ${idade}`)
}