// exercicico 1
let exercicio = [1, 2, 3, 4, 5]
let exer = exercicio.map((ex) => ex *2)
console.log(`o dobro de cada elemento:\n${exer}`);
console.log(`----------------------`);

// exercicio 2
let exercicio1 = [1, 2, 3, 4, 5]
let exerc = exercicio1.filter((ex1)=>{
    return ex1 % 2 ===0
})
console.log(exerc);
console.log(`----------------------`);

// exercicio 3
let fruits = ['apple', 'banana', 'orange', 'kiwi']
fruits.forEach((frutas)=>{
    console.log(`cada fruta: ${frutas}`);
})
console.log(`----------------------`);

// exercicio 4
let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 }, 
    { name: 'Mark', age: 22 }
    ]
students.forEach((students)=>{
    console.log(`O nome do aluno: ${students.name} e a idade ${students.age}`);
})
console.log(`----------------------`);

// exercicio 5
let aluno = [
    { nome: 'John', age: 20 },
    { nome: 'Jane', age: 25 },
    { nome: 'Mark', age: 22 }
    ]
aluno.map((aluno)=>{
    console.log(`Nomes: ${aluno.nome}`);
})
console.log(`----------------------`);
