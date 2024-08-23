//Declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informação ao usuario e atribuindo os valores aas variaveis
nome = prompt('Digite seu nome: ')
idade = parseInt(prompt('Digite sua idade: '))
altura = Number(prompt('Digite sua altura: '))
peso = Number(prompt('Digite seu peso: '))

//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 2023 - idade
let imc = peso / (altura*altura)

//Exibindo as informações no console
console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg seu IMC é ' + imc + 'Kg/m2')