// let nt1 = Number(document.getElementById('nota1').value);

const calcular = () => {
    // coletando informação do nosso input
    let nt1 = document.getElementById('nota1');
    let nt2 = document.getElementById('nota2');
    let resultado= document.getElementById('resultado')
    // convertabdo o valor para numerico 
    let nt1Num = Number(nt1.value);
    let nt2Num = Number(nt2.value);
    // criando o calculo da media
    let media =(nt1Num + nt2Num)/2;
    // trocando 
    resultado.innerHTML = `Sua media é : ${media}`
};


