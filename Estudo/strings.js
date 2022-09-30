// delimitação de strings 
const palavra = 'olá, mundo'
console.log(palavra)

//carcteres de escape
// \n ele quebra a linha na mesma variavel

const palavra2 = " hello \n word "
console.log(palavra2)

//consegue quebrar a linha !!!
const palavra3 = `a
b
c
d
 `
console.log(palavra3)

const texto = 'lorem35'
console.log(texto.toUpperCase())    //todas as palavras maiusculas
console.log(texto.toLocaleLowerCase())//todas as palavras minusculas
console.log(texto.concat(' A linguagem C é a mãe de toas as linguagens ')) //concat = concatenar
console.log(texto[2])  //recorta um letra 
console.log(texto.substring(2)) // recorta uma parte do texto
console.log(texto.replace('lorem', 'dorem')) //subistitui a primeira ocorrencia na pesquisa 
console.log(texto.replaceAll('lorem','Dorem'))
console.log(texto.trim()) //retira os espaços
//const variavel= 123
//console.log(variavel.startswith(123 )) se comeca com 123 e verdade se nao e falso 

