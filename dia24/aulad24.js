let  titulo = window.document.getElementById('valor01');
titulo.style.backgroundColor = 'lightblue';
titulo.style.color = 'green';
titulo.style.textAlign = 'center';



let lista = document.getElementsByClassName('item');


for (let contador=0; contador<=lista.length; contador++){
    lista[contador].style.color = 'purple'
    lista[contador].style.backgroundColor='lavender'
}



// let fundo = document.body.style.backgroundColor='black'
