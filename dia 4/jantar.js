let temFome = prompt('Você está com fome? (sim/não)')
let temDinheiro = prompt('Você tem dinheiro? (sim/não)')
let restauranteAberto = prompt('O restaurante está aberto? (sim/não)')

if(temFome == 'não' || temDinheiro == 'não'){
    console.log('Hoje a janta será em casa')
}else if (temDinheiro === 'sim' && restauranteAberto === 'sim') {
    console.log('Hoje o jantar será no seu restaurante preferido!')
} else {
    console.log('Peça um delivery!')
}