let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

while(continuar == true){
    let modelo = prompt('Digite o modelo')
    modelos[contador] = modelo
    let ano = parseInt(prompt('Digite o ano'))
    anos[contador] = ano
    let valor = Number(prompt('Digite o valor'))
    valores[contador] = valor
    contador++

    let resposta = prompt('Deseja inserir outro carro? (s/n))') 
    if(resposta == "n"){
        continuar = false
    }
}
console.log("Carros cadastrados:");
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

for (let i = 0; i < valores.length - 1; i++){
    for (let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log('Carros ordenados pelo preço:')
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}