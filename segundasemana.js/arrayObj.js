let tarefas =[
    {
        id: 'tarefa1',
        descrição:'Cafe com a turma',
        fim: true,
    },
    {
        id: 'tarefa2',
        descrição:'aula Js',
        fim: false,
    },
    {
        id: 'tarefa3',
        descrição:'aula PY',
        fim: false,
    }
]
console.log(`---------------------------------------------------------`);
console.log(`Atividade : ${tarefas[1].descrição} foi feita ${tarefas[1].fim}`);
console.log(`---------------------------------------------------------`);
let textoObjeto = JSON.stringify(tarefas)
console.log(typeof textoObjeto);
console.log(`---------------------------------------------------------`);
console.log(textoObjeto);
console.log(`---------------------------------------------------------`);
let valorObj = JSON.parse(textoObjeto);
console.log(typeof valorObj);
console.log(`---------------------------------------------------------`);
console.log(valorObj);
console.log(`---------------------------------------------------------`);