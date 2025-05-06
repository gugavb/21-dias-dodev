//Declaração de variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informação ao usuario e atribuindo os valores as variaveis
nome = prompt("Insira seu nome")
idade = parseInt(prompt("Insira sua idade"))
altura = Number(prompt("Insira sua altura"))
peso = Number(prompt("Insira seu peso"))

//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2025 - idade

let imc = 0
imc = peso / (altura*altura)

//Exibindo as informações no console
console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura} de altura, pesa ${peso}kg seu IMC é ${imc} Kg/mg2`)