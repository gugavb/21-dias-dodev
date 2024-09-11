//  #1
//CRIANDO VARIÁVEIS
let numero = parseInt(prompt("Digite um número inteiro e positivo"))

//CRIANDO LOOP FOR
for(let i = 0; i<=numero; i++){
    console.log(i)
}

//  #2
//CRIANDO LOOP FOR
for(let i = 0; i<=50; i+=5){
    console.log(i)
}

//  #3
//CRIANDO LOOP FOR
for(let i = 50; i>=0; i-=5){
    console.log(i)
}


// #4
//CRIANDO VARIÁVEIS
let num = parseInt(prompt("Digite um número para inteiro e positivo"))

//CRIANDO LOOP FOR
for(let i = num; i<=num+2; i++){
    console.log("Tabuada do numero: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " X " + j + " = " + (i*j))
    }
}