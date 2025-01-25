//CRIANDO VARIÁVEIS
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let peso = Number(prompt('Digite seu peso em Kg'))
let altura = Number(prompt('Digite sua altura em metros'))
let profissao = prompt('Digite sua profissão')

console.log(`Olà ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

//VERIFICANDO IDADE
if(idade >= 18){
    console.log("Está liberado para tomar umas geladas.")
} else {
    console.log("Sem gelada para você.")
}

//DESCOBRINDO IDADE FRACIONADA
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('Sua idade em meses é: ' + meses)
console.log('Sua idade em semanas é: ' + semanas)
console.log('Sua idade em dias é: ' + dias)

//DESCOBRINDO IMC
let imc = peso / (altura * altura)

if(imc < 18,5){
    console.log('Magreza')
} else if(imc >= 18,5 && imc <= 24,9){
    console.log('Normal')
} else if(imc >= 25 && imc < 30){
    console.log('Sobrepeso')
} else {
    console.log('Obesidade')
}

//DESCOBRINDO O ANO DE NASCIMENTO
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de: " + anoNasc)

//EXIBINDO ANOS E IDADES
let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++;
}

//LOOP DOWHILE
do{ 

    //INSERIR LÓGICA ANTERIOR
    let continuar = prompt('Deseja inserir os dados novamente? (s/n)')
} while (continuar === "s")