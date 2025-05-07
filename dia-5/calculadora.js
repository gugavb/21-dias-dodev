//CRIANDO VARIAVEIS
let num1 = Number(prompt('Digite um número'))
let num2 = Number(prompt('Digite outro número'))
let opcao = Number(prompt("Escolha a operação que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

//CRIANDO SWITCHCASE
switch(opcao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " x " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
}