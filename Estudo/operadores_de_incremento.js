//mostra uma mensagem para o usuario 
alert('ola mundo')

const nome_do_usuario = prompt('Olá, usuário, qual o seu nome?')
//prompt mostra uma msg e recebe um valor se tiver um const ou let antes do codigo.

//typeof retorna o valor da variavel 

let numeroo = Number(prompt('olá, ' + nome_do_usuario + '. Digite algum numero,por favor '))
//Number trasnforma em numero

const sucessor= numeroo + 1
const antecessor= numeroo - 1
alert('O sucessor de'+ numeroo + ' é ' + sucessor )
alert('O antecessor de' + numeroo + ' é ' + antecessor) 

//operaradores de incremento

//const sucessor= numeroo++ //valor da variavel +1

//console.log(numeroo++)      //100    // operador de pós-incremento 
//console.log(numeroo)        //101
//console.log(++numeroo)      //102    // pre-incremento


//operadores de decremento

//console.log(numeroo--)
//console.log(numeroo)
//console.log(--numeroo)