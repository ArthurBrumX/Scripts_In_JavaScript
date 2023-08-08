let destino = window.prompt('Digite o Destino: ')
let km = Number(window.prompt('Digite a Quantidade de km até o destino: '))
let gasolina = Number(window.prompt('Digite o valor atual do litro da gasolina: '))
let revisao_veiculo = Number(window.prompt('Digite o valor da revisao do veiculo: '))
let comida = Number(window.prompt('Digite o valor gasto em comida'))
let pedagio = Number(window.prompt('Digite o valor dos pedagios: '))

let valor_gasolina = km * gasolina
let gastos = revisao_veiculo + comida + pedagio
let total = valor_gasolina + gastos

alert(`Para chegar em ${destino}, Apenas a gasolina vai custar R$${valor_gasolina}, para os demais gastos sao R$${gastos}, no total a viagem vai custar R$${total}`)

console.log(`Para chegar em ${destino}!!`)
console.log(`Apenas de gasolina vao ser gastos R$${valor_gasolina} Reais`)
console.log(`Para os demais gastos vai custar R$${gastos} Reais`)
console.log(`O custo da Viagem de carro esta estimado em R$${total} Reais`)
