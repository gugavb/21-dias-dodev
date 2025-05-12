let nomes = []
let senhas = []
let contador = 0

do{
    let opcao = prompt("Selecione uma opção: \n1-cadastrar \n2-login \n3-excluir 4-encerrar")

    if(opcao == "1"){
        let nomeCadastro = prompt("Digite o nome para cadastro")
        nomes[contador] = nomeCadastro
        let senhaCadastro = prompt('Digite a senha para cadastro')
        senhas[contador] = senhaCadastro
    }else if(opcao == "2"){
        let nomeLogin = prompt('Digite o nome para login')
        let senhaLogin = prompt('Digite a senha  para login')
    }
    
}while()