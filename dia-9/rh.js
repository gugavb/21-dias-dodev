//CRIANDO VARIÁVEIS/LOOP
let nome
let idade = 0 
let salarioAtual = 0

let confirmar = "n"
while(confirmar != "s"){
    nome = prompt("Digite seu nome")
    idade = Number(prompt("Digite sua idade"))
    salarioAtual = Number(prompt("Digite seu salário atual"))
    console.log(`Nome: ${nome}, idade: ${idade}, salário atual: ${salarioAtual}`)
    confirmar = prompt("As informações estão corretas? (s/n)")
    if(confirmar == "n"){
        alert("Digite as informações novamente")
    }
}
//FAZENDO A PREVISÃO DO SALÁRIO
    let aumento = 0.015
    console.log("Previsão salarial para os próximos 10 anos:")

    for(let ano = 1; ano <= 10; ano++) {
        salarioAtual += salarioAtual * aumento
        aumento *= 2

        console.log((2023 + ano) + " = R$ " + salarioAtual)
    }