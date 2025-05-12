let alunos = []
let notas = []
let continuar = true
let contador = 0

while(continuar == true){
    let nome = prompt(`Digite o nome do ${contador+1}° aluno`)
    let nota = Number(prompt(`Digite a nota do aluno`))
    alunos[contador] = nome
    notas[contador] = nota
    contador++
    let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)")
    if(resposta == "n"){
        continuar = false
    }
}

let somaNotas = 0

console.log("Notas dos alunos: ")
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length
console.log(`A soma das notas foi:` + somaNotas)
console.log(`A média geral da turma foi: ${media}`)