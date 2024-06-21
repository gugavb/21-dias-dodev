//CRIANDO VARIÁVEIS
let opcao = parseInt(prompt('Bem vindo ao DoDev thru, você deseja:' + '\n1 - Abastecer com gasolina \n2 - Abastecer com álcool \n3 - Calibrar os pneus'))
let valor;
let quantidade;

//CRIANDO SWITCHCASE
switch (opcao) {
    case 1:
        valor = Number(prompt('Entre com o valor desejado para abastecer'))
        quantidade = valor / 5
        console.log('Foram abastecidos ' + quantidade + 'L de gasolina')
        break;
    case 2 :
        valor = Number(prompt('Entre com o valor desejado para abastecer'))
        quantidade = valor / 3
        console.log('Foram abastecidos ' + quantidade + 'L de álcool')
        break;

    case 3:
        console.log('Pneus calibrados com sucesso!')
    default:
        break;
}