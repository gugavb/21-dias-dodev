//CRIANDO VARIÁVEIS
let mediaGeral = 0;
let qtdHomens = 0;
let qtdMulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

//nota, sexo

while (contador <= 10) {
    nota = parseInt(prompt('Digite a nota do ' + contador + ' aluno'))
    sexo = prompt('Digite o sexo (m/f)')
    
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

mediaGeral+= mediaGeral / 10;

console.log('A média geral dos alunos foi: ' + mediaGeral)
console.log(qtdHomens + ' Homens enviaram as notas');
console.log(qtdMulheresAcimaDe7 + ' Mulheres tiveram nota acima de 7');
console.log('Maior nota dos homens: ' + maiorNotaHomens );