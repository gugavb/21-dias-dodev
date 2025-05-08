//DECLARANDO VARIÁVEIS
let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1
let nota = 0
let sexo

while(contador <= 10){
    nota = parseInt(prompt('Digite a nota do: ' + contador + " aluno"))
    sexo = prompt('Digite o sexo do aluno \nm-masculino \nf-feminino')

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    if (sexo == "f" && nota > 7){
        qtdMulheresAcimaDe7++
    }

    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log('A média geral dos alunos foi: ' + mediageral)
console.log('A quantidade de homens cadastrados foi: ' + qtdHomens)
console.log('A mulheres que tiveram notas acima de 7 foi: ' + qtdMulheresAcimaDe7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)