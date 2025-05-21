let nomes = []
let senhas = []

function solicitarOpcao(){
    let opcao = prompt("Escolha uma opção: \n1 - cadastrar \n2 - login \n3 - excluir \n4 - encerrar programa")
    return opcao
}

function cadastrarUsuario(){
    nomes.push(prompt("Digite o seu nome"))
    senhas.push(prompt("Digite a sua senha"))
}

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome)
    if(indice != -1 && senhas[indice] == senha) {
        return true
    } else {
        return false
    }
}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome)
    if (indice !== -1){
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluído com sucesso!")
    } else {
        console.log("Usuário não encontrado.")
    }
}

let continuar = true
while(continuar){
    let opcao = solicitarOpcao()

    switch(opcao){
        case "1":
            cadastrarUsuario()
            break;
        case "2":
            let nomeLogin = prompt("Digite seu nome")
            let senhaLogin = prompt("Digite sua senha")
            let login = fazerLogin(nomeLogin, senhaLogin)
            if (login) {
                console.log("Login feito com sucesso")
            } else {
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite seu nome")
            excluirCadastro(nomeExcluir)
            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção inválida. Tente novamente.")
            break;
    }
}