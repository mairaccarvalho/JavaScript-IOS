// Objetivo: Criar um programa que permita ao usuário aplicar um desconto em um
// determinado produto, de acordo com o código promocional informado.
// Descrição: O programa deve solicitar ao usuário que informe um código promocional
// (DESC1, DESC2, DESC3, DESC4 ou DESC5) através de um prompt seguindo a
// informação de descontos a seguir:
//  "DESC1 - 05% de desconto"
//  "DESC2 - 10% de desconto"
//  "DESC3 - 15% de desconto"
//  "DESC4 - 20% de desconto"
//  "DESC5 - 25% de desconto”
// Usando a estrutura switch, o programa deve identificar qual foi o código promocional
// informado pelo usuário e aplicar o desconto correspondente ao produto.
// Após a aplicação do desconto, o programa deve exibir o valor original do produto e o
// valor com desconto na tela.
// Caso o usuário informe um código promocional inválido, o programa deve exibir uma
// mensagem de “erro” na tela, informando que o mesmo não é um cupom válido.
// Exemplo de uso:
// Suponha que um usuário informe o código promocional DESC2. Nesse caso, o
// programa deve exibir a mensagem "10% de desconto" na tela e aplicar um desconto de
// 10% no produto. Em seguida, o programa deve exibir o valor original do produto (R$
// 1000) e o valor com desconto (R$ 900) na tela.

let produto = prompt('Qual o código promocional?')

switch(produto) {
case 'DESC1':
alert('05% de desconto');
break
case 'DESC2':
alert('10% de desconto');
break
case 'DESC3':
alert('15% de desconto');
break
case 'DESC4':
alert('20% de desconto');
break
case 'DESC5':
alert('25% de desconto');
break
default:
alert('Nenhum desconto encontrado');
break
}
