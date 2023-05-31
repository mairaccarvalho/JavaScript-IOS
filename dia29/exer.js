let doc1 = document.querySelector('#p1');

let mudarT = ()=>{
    doc1.innerHTML='Textinho ';
    doc1.style.color='blue';
}
let mudarC= ()=>{
    doc1.style.color='green';
}

let mudarV =() =>{
    doc1.innerHTML='Metodo addEventListener';
    doc1.style.color='black';
}
let mudarV1 =() =>{
    doc1.innerHTML='Lorem ipsum dolor sit amet.';
    doc1.style.color='black';
}


doc1.addEventListener('click', mudarT);
doc1.addEventListener('mouseenter', mudarC);
doc1.addEventListener('mouseleave', mudarV);
doc1.addEventListener('dblclick', mudarV1);
