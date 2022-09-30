/**
 * Criar uma função responsavel por mostrar o alerta na tela
 */
/**
 * Document e uma representação do HTML do seu site dentro do JAVAscript
 * O 
 */
function mostrarAlerta() {
    const divalerta = document.getElementById('Alerta')
    divalerta.classList.add('mostrar')
/**
    * A propiedade EX: divalerta.-->classList<-- retorna um array com todas as classes CSS que 
    * um  possui elemnto
    */
    
}

function fecharAlerta() {
    const divalerta = document.getElementById('Alerta')
    divalerta.remove('mostrar')
    
    
    }


    
const btnmostrar = document.getElementById('mostrar')
const btnfechar = document.getElementById('fechar')
//metodo para ouvir eventos do html
btnmostrar.addEventListener('click', mostrarAlerta )

btnfechar.addEventListener('close', fecharAlerta)



    










