let modelos = []
let anos = []
let valores = []
continuar = true
let contador = 0

while(continuar){
    let modelo = prompt("Digite o modelo do carro") 
    modelos[contador] = modelo
    let ano = parseInt(prompt("Digite o ano do carro"))
    anos[contador] = ano
    let valor = parseFloat(prompt("Digite o valor do carro"))
    valores[contador] = valor
    contador++

    let resposta = prompt("Deseja inserir outro carro? (s/n)")
    if(resposta == "n"){
        continuar = false
    }
}

console.log("Carros cadastrados:");
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}