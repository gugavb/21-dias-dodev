var nome
var salario

function perguntarColaborador(nome, salario){
    nome = prompt("Digite o nome do colaborador")
    salario = Number(prompt("Digite o salário do colaborador"))
    calcularAumentoSalario(nome, salario)
}

function calcularAumentoSalario(nome, salario){
    var aumento = 0

if(salario <= 1500){
    aumento = 0.2
} else if(salario <= 2000){
    aumento = 0.15
} else if(salario <= 3000){
    aumento = 0.10
} else if(salario > 3000){
    aumento = 0.05
}

    var salarioReajustado = salario + (salario * aumento)
    console.log(`Nome do colaborador: ${nome}`)
    console.log(`Salário antes do reajuste: R$${salario}`)
    console.log(`Aumento: ${aumento}`)
    console.log(`Salário reajustado: R$${salarioReajustado}`)
}

function perguntarNovamente(){
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if(resposta == "s") {
        perguntarColaborador()
    } else {
        console.log("Programa encerrado!")
    }
}