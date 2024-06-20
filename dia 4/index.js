
let idade = Number(prompt("Insira sua idade"))
let nome = prompt("Insira seu nome")
// == igual | != diferente | < maior que e > menor que | <= >= maior e menor ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!

if (idade === 19 && nome === 'Gustavo') {
    console.log('Seu nome é Gustavo e você tem 19 anos')
}else if(idade === 19 || nome === 'Gustavo'){
    console.log('Seu nome é Gustavo OU o você tem 19 anos')
}else{
    console.log('Seu nome não é Gustavo e você não tem 19 anos')
}


