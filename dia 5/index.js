let idade = Number(prompt('Insira sua idade'))

switch (idade) {
    case 10:
        console.log('Você tem 10 anos');
        console.log('Primeira linha');
        break;
    case 15:
        console.log('Você tem 15 anos');
        console.log('Segunda linha');
        break;

    default:
        console.log('default');
        break;
}