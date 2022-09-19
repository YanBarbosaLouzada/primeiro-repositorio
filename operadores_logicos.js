

//operadores logico 

// operador E //duas condicões verdadeiras 

// v -> veradeiro
// F -> Falso

// v v = v
// v f = f
// f v = f

// media precisa ser maior ou igual 7 E preciso ter, no minimo, 80% de presença
const media = (3.5 + 6 + 10) / 3
const presemca = 0.7

console.log(media >= 7 && presemca >= 0.8) //&& testar se e verdadeiro ou nao 

//  operador ou // Um ou outro verdadeiro 

// v v = v
// v f = v
// f v = v

console.log(4 > 7 || 3 < 2)
console.log(5 > 2 || 7 > 8)

// Operador Nao

//console.log(!resultado) // ! trasforma o valor em diferente do real 

const logado    =   false
if(!logado){ 
    console.log('Você nao esta logado')
}




