
/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento*/
/*
1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
*/

//-> Metodo de pagamento 
// Dinheiro 
// Cheque
// No cartao 

//parseFloat transforma o texto em valor decimal
let preço_do_prduto = parseFloat(prompt('Qual o preço do produto?'))

//while = enquanto
while (isNaN(preço_do_prduto) == true) {
    alert('O preço do produto é invalido digite apenas numeros')
    preço_do_prduto = parseFloat(prompt('Qual o preço do produto'))
}

//let mensagem = 'Informe o metodo de pagamento: \n Digite 1 para pagamento em dinheiro \n Digite 2 para pagamento em cheque \n Digite 3 para o pagamento com cartão'
let metodo_de_pagamento = parseInt(prompt('Informe o metodo de pagamento: \n Digite 1 para pagamento em dinheiro \n Digite 2 para pagamento em cheque \n Digite 3 para o pagamento com cartão'))

while (isNaN(metodo_de_pagamento) || metodo_de_pagamento < 1 || metodo_de_pagamento > 3) {
    alert('invalido digite apenas numeros e os que estao dispiveis!')
    metodo_de_pagamento = (prompt('Informe o metodo de pagamento: \n Digite 1 para pagamento em dinheiro \n Digite 2 para pagamento em cheque \n Digite 3 para o pagamento com cartão'))


}
if (metodo_de_pagamento == 1 || metodo_de_pagamento == 2) {
    const preço_final = preço_do_prduto * 0.9 //preco final 
    alert('O preço final do pagamento é ' + preço_final + ' reais')
} else if (metodo_de_pagamento == 3) {
    alert('Entrando em seção cartão de crédito')
    //numero inteiro 
}
let parcela = parseInt(prompt('Fazemos em até 3 vezes ... Por favor informe a quantidade de parcelas!'))

while (isNaN(parcela) || parcela < 1 || parcela > 3) {
    alert('invalido digite apenas numeros e os que estao dispiveis!')
    parcela = parseInt(prompt('Fazemos em até 3 vezes ... Por favor informe a quantidade de parcelas!'))
}

if (parcela == 1) {
    const preço_final = +preço_do_prduto * 0.85
    alert('O preço final do pagamento é ' + preço_final + ' reais')
} else if (parcela == 2) {
    alert('O preço final do pagamento é ' + preço_do_prduto + ' reais')
} else {
    const preço_final = +preço_do_prduto * 1.1
    alert('O preço final do pagamento é ' + preço_final + ' reais')
}

//console.log(metodo_de_pagamento)

//so vai executar se for verdadeiro o IF( condicão)