const sexo =parseFloat(prompt(`Qual é seu genero 
Se for Mulher digite 1
Se for Homem digite 2`))
const peso = Number(prompt('qual seu peso?'))
const altura = Number(prompt('qual sua altura ?'))
const imc = peso /(altura**2)
if(sexo==2 & imc < 18.5){
    alert('Você está a baixo do peso')   
}else if(sexo==2 & imc>= 18.5 & imc<=25){
    alert('Você está no peso normal')
}if(sexo==2 & imc>= 25 & imc<=30){
    alert('Você está a acima do peso')
}else if(sexo==2 & imc>30){
    alert('Você está obeso')
   } if(sexo == 1 & imc < 18.5){
        alert('Você está a baixo do peso')   
    }else if(sexo == 1 & imc>= 18.5 & imc<=25){
        alert('Você está no peso normal')
    }if(sexo == 1 & imc>= 25 & imc<=30){
        alert('Você está a acima do peso')
    }else if(sexo == 1 & imc>30){
        alert('Você está obeso')
    }
