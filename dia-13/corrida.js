class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    exibirInformacoes(){
        console.log("Exibindo Informações")
        console.log(`Nome da equipe: ${this.nome}`)
        console.log(`Potência: ${this.potencia}`)
        console.log(`Velocidade máxima: ${this.velocidadeMaxima}`)
        console.log(`Aceleração: ${this.aceleracao}`)
    }

    calcularTampoMedio(distancia) {  
    let resultado = distancia / (this.velocidadeMaxima/this.aceleracao);
    return resultado
}
}

class Corrida {
    nome
    tipo
    distancia
    vencedor
    participantes

    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.vencedor = ""
        this.participantes = []
    }

    definirVencerdor(){
        let menorTempo = this.participantes[0].calcularTampoMedio(this.distancia)
        let vencedor = this.participantes[0]

        for(let index = 1; index < this.participantes.length; index++){
            let tempo = this.participantes[index].calcularTampoMedio(this.distancia)
            if (tempo < menorTempo) {
                 menorTempo = tempo
                 vencedor = this.participantes[index]
            }
        }

        return this.vencedor = vencedor
    }

    exibirVencedor(){
        alert("O vencedor é: " + this.vencedor.nome)
    }
}

let corrida = new Corrida("Monza", "Fórmula 1", 6000)

corrida.participantes[0] = new carro('Kicks',120, 160, 5)
corrida.participantes[1] = new carro('Marea', 210, 200, 9)
corrida.participantes[2] = new carro('Peugeot 206', 300, 220, 10)

corrida.definirVencedor()
corrida.exibirVencedor()