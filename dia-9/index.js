let continuar = true

while(continuar){
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = Number(prompt("Digite seu peso em Kg"))
let altura = Number(prompt("Digite sua altura em metros"))
let profissao = prompt("Digite sua profissão")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg. `)

if(idade > 18){
    console.log('Está liberado para tomar umas geladas.')
} else {
    console.log('Sem gelada para você.')
}

console.log(`Sua idade em meses é : ${idade * 12} meses`)
console.log(`Sua idade em semanas é : ${idade * 52}`)
console.log(`Sua idade em dias é : ${idade * 365}`)

let imc = peso / (altura * altura)
if (imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc >= 25 && imc <= 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

let ano = 2025
let anoNasc = ano - idade
console.log(`Seu usuário nasceu em ${anoNasc}`)

for (let i = anoNasc; i <= ano; i++) {
    let idadeAtual = i - anoNasc
    console.log(`${i} - ${idadeAtual} anos de idade`)
}

continuar = prompt("Deseja inserir novos dados, ou finalizar o programa? (1/2)")
    if(continuar == "1") {
        continuar = true
    } else {
        continuar = false
    }
}