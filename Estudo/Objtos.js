/**
 * Objetos em java script é uma estrutura que permite organizar dados de forma chave-valor
 *  
 * EX:
 */ 
let end={
        rua : 'Rao',
        numero:'222',
        estado:'sp',
        complemento:'casa',
        cep: '123',
    }





const pessoa ={
    nome: 'Felipe',
    idade:   '23anos',
    cpf: '123 123 123',
    altura: '1.70',
    endereco:{...end }, //Ele pega os valores e faz coisas independentes 
    solteiro:true,
    habilidade:[ 'ingles ',  'Come muito ', 'rapida' ],
    cumprimentar(){

        /*
        quando eu desejo referenciar o mesmo objt dentro dele mesmo usamos this
        */
       console.log('Olá, tudo bem? Meu nome é '+this.nome)
        }


    }



    //acrssar a um lugar de um objt
    console.log(pessoa.habilidade[2])
    pessoa.cumprimentar()

    pessoa.nome = 'joão'    
    pessoa.habilidade.push('pular')
    console.log(pessoa.habilidade)
    console.log(pessoa.nome)
    console.log(pessoa['cpf'])