
const sexo =parseFloat(prompt(`Qual é seu genero 
Se for Mulher digite 1
Se for Homem digite 2`))

const altura = Number(prompt('Qual sua altura?'))

if(sexo == 1 ){
    const peso = 62.1*+altura - 44.7
    alert('O seu peso ideal é ' +peso+ ' kg')
}else if (sexo == 2 ) {
    const peso = 72.7*+altura - 58
    alert('O seu peso ideal é ' +peso+ ' kg ')
}

