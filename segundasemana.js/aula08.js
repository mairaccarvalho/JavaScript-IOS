// let contador = 0;

// while(contador <=10){
//     console.log(`Valor do contador ${contador}`);
//     contador +=2
// }
// console.log(`fim`);
let veiculo1 = {
    nome: 'celta', 
    marca: 'chevrolet',
    cor: 'preta',
    ano: 2010
}
let veiculo2 = {
    nome2: 'siena', 
    marca2: 'sla',
    cor2: 'cinza',
    ano2: 2012
}
let veiculo3 = {
    nome3: 'fusquinha', 
    marca3: 'não sei',
    cor3: 'vermelho',
    ano3: 2005
}
let veiculo4 = {
    nome4: 'gol', 
    marca4: 'sla2',
    cor4: 'marrom',
    ano4: 1998
}

let{
    nome,
    marca,
    cor,
    ano
}= veiculo1
console.log(`o nome do carro é ${nome}, a marca é ${marca}, da cor ${cor} e do ano ${ano}`);
console.log(`---------------------------------------------------------`);
let{
    nome2,
    marca2,
    cor2,
    ano2
}= veiculo2
console.log(`o nome do carro é ${nome2}, a marca é ${marca2}, da cor ${cor2} e do ano ${ano2}`);
console.log(`---------------------------------------------------------`);
let{
    nome3,
    marca3,
    cor3,
    ano3
}= veiculo3
console.log(`o nome do carro é ${nome3}, a marca é ${marca3}, da cor ${cor3} e do ano ${ano3}`);
console.log(`---------------------------------------------------------`);
let{
    nome4,
    marca4,
    cor4,
    ano4
}= veiculo4
console.log(`o nome do carro é ${nome4}, a marca é ${marca4}, da cor ${cor4} e do ano ${ano4}`);
console.log(`---------------------------------------------------------`);


if (ano <=2003){
    console.log(` ${nome} vai pagar`);
}else{
    console.log(` ${nome} não precisa`);
}

if ( ano2<=2003){
    console.log(` ${nome2}  vai pagar`);
}else{
    console.log(` ${nome2} não precisa`);
}

if ( ano3 <=2003){
    console.log(`${nome3} vai pagar`);
}else{
    console.log(` ${nome3} não precisa`);
}

if ( ano4 <=2003){
    console.log(` ${nome4} vai pagar`);
}else{
    console.log(` ${nome4} não precisa`);
}