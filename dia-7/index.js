let mediaGeral = 0;
let qtdHomens = 0;
let qtdMulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

while(contador <= 10) {
    nota = Number(prompt('Insira a nota do aluno'))
    sexo = prompt('Insira o sexo do aluno')

    if(sexo == 'm'){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == 'f' && nota > 7){
        qtdMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10;

console.log('A média geral dos alunos foi: ' + mediaGeral)
console.log('A quantidade de homens cadastrados foi: ' + qtdHomens)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qtdMulheresAcimaDe7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)