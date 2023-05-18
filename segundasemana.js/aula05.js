// idade = 13;

// if(idade >=18){
//     console.log(`Pode viajar sozinho`);
// }else if (idade > 12 && idade < 15){
//     console.log(`Precisa autorização`);
// }else{
//     console.log('Não pode viajar');
// }
// console.log('Fim programa');



// let conta = 1300
// let fatura = conta >= 1500 ? "Posso pagar a fatura" : "Não vai dar agora";
// console.log(fatura);


// let viajem = 6;
// let destino = 'pais3'

// switch(destino){
//     case 'pais1':
//         console.log('Irei para o canada');
//         break

//     case 'pais2':
//         console.log('Irei para os EUA');
//         break

//     case 'pais3':
//         console.log('Irei para a Noroega');
//         break

//     case 'pais4':
//         console.log('Irei para a Russia');
//         break

//     case 'pais5':
//         console.log('Irei para o Japão');
//         break
//     case 'pais6':
//         console.log('Irei para o Alemanha');
//         break
//     case 'pais7':
//         console.log('Irei para o Australia');
//         break

//     default:
//         console.log('Não vou pra lugar nenhum, vou ficar em casa msm');
//         break
// }


let viajar = 1400
while(viajar < 2000){
    console.log(`Voce não tem dinheiro o suficiente.Vai ficar em casa msm, so tem ${viajar}`);
    viajar += 100
}
console.log(`Voce tem dinheiro o bastante. Agora voce tem ${viajar} `)


let num1 = 0
do {
    num1 += 1
    console.log(num1);
}while(num1 <= 10 );
console.log(`Chegamos a 10 `)      
