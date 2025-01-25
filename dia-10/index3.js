let array = []
let arrayInvertido = []

let qtdArrays = Number(prompt('Quantos arrays deseja inserir?'))

for (let i=0; i < qtdArrays; i++){
    let numero = Number(prompt('Digite o ' + (i+1) + 'º número'))
    array[i] = numero 
}

console.log("Array original: " + array)

let contador = qtdArrays-1
for (let i=0; i < qtdArrays; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)