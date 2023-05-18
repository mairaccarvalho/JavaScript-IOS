// // let nomes = ['João', 'Maria', 'Enzo'];
// // console.log(nomes);
// // nomes[0]= 'Valentina';
// // console.log(nomes);
// // nomes[3]= 'Bruna';
// // console.log(nomes);
// // let nom1 = nomes.pop()
// // console.log(nomes);
// // nomes.push('Giovana')
// // console.log(nomes);
// // let aluno =nomes.shift()
// // console.log(nomes);
// // nomes.unshift('Paricia')
// // console.log(nomes);

// // console.log(nomes.toString());
// // console.log(nomes.join(' - '));

// let exer = [
//     ['Gustavo', ' Nath', 'Alan', 'Leo'],
//     ['Isabella', ' Kaue', ' Day'],
//     ['Gabriel', 'Ricardo', 'Daniel'],
// ];
// console.log(exer);

// let exer2 = ['maça', 'pera', ' uva', 'manga'];
// console.log(exer2);


// exer2.push('melancia');
// console.log(exer2);


// delete exer2[3];
// console.log(exer2);

// console.log(exer2.toString());
// console.log(exer2.join(' + '));


let pessoa = {
    nome: 'Maira',
    sobreNome: 'Cardoso',
    idade: 19,
    endereco: {
        rua:'1° de maio',
        bairro:'Mandaqui',
        cep:026445
    },
    Hobbies: ['Pintar',' ler',   ' e Filmes'],


}
console.log(typeof pessoa);
console.log(`A ${pessoa.nome} tem ${pessoa.idade} e mora em ${pessoa.endereco.rua }`);
let pessoa2 = {
    nome: 'Maria',
    sobreNome: 'Santos',
    idade: 12,
    endereco: {
        rua:'2° de maio',
        bairro:'Sana',
        cep:026475
    },
    Hobbies: [, 'ler','Filmes'],


}
console.log(`A ${pessoa2.nome} tem ${pessoa2.idade} e mora em ${pessoa2.endereco.rua }`);

console.clear()

let {
    nome,
    sobreNome,
    idade,
    Hobbies
} = pessoa
console.log(`O aluno ${nome} tem ${idade} anos e gosta de ${Hobbies}`);