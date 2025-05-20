class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    apresentar(){
        console.log("Informações do Computador:")
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Vídeo: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento}`)
        console.log(`Memória RAM: ${this.memoriaRam}`)
        console.log(`SSD: ${this.ssd}`)
    }
}

const meuComputador = new Computador("Desktop", "Ryzen 5", "Integrado", "1000GB", "16gb", "SSD")
meuComputador.apresentar();