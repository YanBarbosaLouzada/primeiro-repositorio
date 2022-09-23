let escolha = prompt('Se Deseja colocar alcool digite 1 se for gasolina digite 2 ! ')
while (isNaN(escolha) == true) {
    alert('Invalido digite apenas numeros')
    let escolha = parseFloat(prompt('Se Deseja colocar alcool digite 1 se for gasolina digite 2 !'))

    const litros = parseFloat(prompt('Quantos litros deseja por'))

    while (isNaN(litros) == true) {
        alert('Invalido digite apenas numeros')
        let litros = parseFloat(prompt('Quantos litros deseja por'))

        const precoa = 1.90
        const precog = 2.70


        if (escolha == 1 & litros == 25) {
            const desconto = litros * 1.862
            alert('O preço final do pagamento é ' + desconto + ' reais')
        } else if (escolha == 1 & litros > 25) {
            const desconto = litros * 1.862
            alert('O preço final do pagamento é ' + desconto + ' reais')
        } else if (escolha == 1) {
            alert('O preço final do pagamento é ' + precoa * +litros + ' reais')
        } if (escolha == 2 & litros == 25) {
            const desconto = litros * 2.619
            alert('O preço final do pagamento é ' + desconto + ' reais')
        } else if (escolha == 2 & litros > 25) {
            const desconto = litros * 2.619
            alert('O preço final do pagamento é ' + desconto + ' reais')

        } else if (escolha == 2) {
            alert('O preço final do pagamento é ' + precog * +litros + ' reais')
        }
    }}