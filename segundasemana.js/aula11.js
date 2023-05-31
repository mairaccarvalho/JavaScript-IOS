// let pessoa= {
//     nome: 'Maira',
//     sobreNome:'Cardoso',
//     idade: 19,
//     endereço: 'Rua'
// }
// console.log(typeof pessoa);
// console.log(`A ${pessoa.nome} tem ${pessoa.idade} anos`);

// class Pessoa {
//     constructor(Nome,SobreNome,Idade,Endereco){
//         this.Nome = Nome;
//         this.SobreNome = SobreNome;
//         this.Idade = Idade;
//         this.Endereco= Endereco;
//     }
// }    

// let maira = new Pessoa("Maira","Cardoso", 19,'Rua. Dr ...');
// console.log(typeof maira);
// console.log(`Olá ${maira.Nome} ${maira.SobreNome} voce tem ${maira.Idade} anos`);
// let outra = new Pessoa("Maria","Silva", 44,'Rua.  ...');
// console.log(typeof maira);
// console.log(`Olá ${outra.Nome} ${outra.SobreNome} voce tem ${outra.Idade} anos`);

class Animal {
    constructor(Especie, Raca,Idade, Cor, Hobbie){
        this.Especie=Especie;
        this.Raca=Raca;
        this.Idade=Idade;
        this.Cor=Cor;
        this.Hobbie=Hobbie;
    }
}
let Animal1= new Animal('Cachorro', 'Viralata', 5, 'preto', 'Morder canela')
console.log(`O ${Animal1.Especie} é ${Animal1.Raca} tem ${Animal1.Idade} anos e gosta de ${Animal1.Hobbie}`);
console.log(`----------------------------------------------------------------------------`);
let Animal2= new Animal('Vaca', 'Das caras', 3, 'Mesclada', 'Comer mato')
console.log(`A ${Animal2.Especie} é ${Animal2.Raca} tem ${Animal2.Idade} anos e gosta de ${Animal2.Hobbie}`);
console.log(`----------------------------------------------------------------------------`);
let Animal3= new Animal('Gato', 'De rua', 5, 'branco', 'Derrubar as coisas da mesa')
console.log(`O ${Animal3.Especie} é ${Animal3.Raca} tem ${Animal3.Idade} anos e gosta de ${Animal3.Hobbie}`);console.log(`----------------------------------------------------------------------------`);
class Carro{
    constructor(Marca, Ano, Cor){
        this.Marca=Marca;
        this.Ano=Ano;
        this.Cor=Cor;
    }
}
let Veiculo1= new Carro('Chevrolet', 2015, 'Cinza')
console.log(`O ${Veiculo1.Marca} é de ${Veiculo1.Ano}, da cor ${Veiculo1.Cor}`);
console.log(`----------------------------------------------------------------------------`);
let Veiculo2= new Carro('Fusca', 1998, 'Azul')
console.log(`O ${Veiculo2.Marca} é de ${Veiculo2.Ano}, da cor ${Veiculo2.Cor}`);
console.log(`----------------------------------------------------------------------------`);
let Veiculo3= new Carro('Porche', 2022, 'Preto')
console.log(`O ${Veiculo3.Marca} é de ${Veiculo3.Ano}, da cor ${Veiculo3.Cor}`);
console.log(`----------------------------------------------------------------------------`);