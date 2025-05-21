let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

function acharNumerosEmComum(arrayUm, arrayDois){
    let resultado = []
    let contadorResultado = 0

    for(let i = 0; i < arrayUm.length; i++){
        //O segundo FOR percorre o arrayDois, para cada número de arrayUm ele compara com todoas os números do arrayDois
        for(let j = 0; j < arrayDois.length; j++){
            //Se a comparação for bem sucedida ele adiciona esse número no array de números em comum e atribui o valor máximo ao contador j assim encerrando a verificação para esse número e evitando números duplicados
            if(arrayUm[i] == arrayDois[j]){
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(acharNumerosEmComum(arrayA, arrayB))