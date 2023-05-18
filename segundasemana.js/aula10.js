let alunosAprovados = ['kaue', 'Ricardo', 'Daniel', 'Maira', 'Gustavo'];
// console.log(`Ola ${alunosAprovados[0]}! Voce foi aprovado!`);

alunosAprovados.forEach((nome) => {
    console.log(`Olá ${nome}!, voce foi aprovado!`);
});

// for.Each
let email = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com',
    'email5@gmail.com',
    'email6@gmail.com',
];

email.forEach((emails)=>{
    console.log(`o email foi enviado para ${emails} com sucesso!`);
})

const email0 = (valor)=>{
    console.log(`Email enviado para: ${valor}`);
}

email.forEach((email0))



let fruta = [' maça', ' murangu',' banana',' uva']
// fruta.forEach((frut, ind)=> {
//     console.log(`Nome da fruta${frut}, na posição ${ind}`);
// })


const frut = (fru,inde)=>{
    console.log(`Nome da fruta${fru}, na posição: ${inde}`);
}
fruta.forEach(frut)

// map

let produtos = [
    {
        produto : 'celular',
        valor: 2000,
    },
    {
        produto : 'PC',
        valor: 2500,
    },
    {
        produto : 'Tablet',
        valor: 4000,
    },
    {
        produto : 'X-Box',
        valor: 3600,
    }
];
let valorProd = produtos.map((vp) => vp.valor * 1.05);
console.log(`Valor final prod: ${valorProd}`);
console.log(produtos );








// for(let contador = 0; contador<=10; contador+=2){
//     console.log(`numero contador ${contador}`);
// }
// console.log(contador);



let idadeAl = [15,14,28,18,18,18,17,45,16]
let alunoApro = idadeAl.filter((idade) =>{
    return idade >=15 && idade <=29;
});
console.log(alunoApro);