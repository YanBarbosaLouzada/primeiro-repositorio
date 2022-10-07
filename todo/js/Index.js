/**
 * Métodos de recuperação de elementos HTML
 */


//Procura tags com o nome form 

//const todo_form= document.getElementsByTagName('form')

//Procura todos os Id com esse nome 

const todo_form = document.getElementById('todo-form')
const todos = []

//addEventListener Serve para ouvir um elemento
//querySelector recuperta o primeiro elemento que a tenda a um sleletor css informado 
//value e para acessarmos o valor de um HTML

/**
 * preventDefault() Evita que outros elementos sejam emetidos
 * 
 * 
 * evento.stopPropagation() Ele para o efeito padrao de atulizar a pag
 */

todo_form.addEventListener('submit', function () {
    const todo_input = document.querySelector('#todo')
    todos.push(todo_input.value)
    todo_input.value = ''
    renderizarTodos()
})

function renderizarTodos() {
    const todoListSection = document.querySelector('#todos-list')
    todoListSection.innerHTML = ''

    for (let tarefa of todos) {
        /**
         * createElement e método responsavel por gerar novos elementos dentro do HTML
         */
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
    
        btnDelete.addEventListener('click' , ()=> {
        //indexOf descobre o indece(numero / posição)dentro do array, se ele nao achar retorna -1
        const index = todos.indexOf(tarefa)
        // slice serve para excluir um determinado valor do seu array
        todos.splice(index, 1)
        renderizarTodos()
    })  
        
           
        
    

        //arrow functions SEMPRE são anônimas

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'aling-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        //innertext é a propriedade que informa qual o conteudo de texto que está dentro de um elemento HTML.
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete '
        //appendChild serve para colocar elementos HTML uns dentro dos outros
        // append colocar mais de um por vez 
        btnDelete.appendChild(spanIcon)
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todoListSection.appendChild(divCard)

    }
}
