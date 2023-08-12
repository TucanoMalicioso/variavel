const tipoDePagamento= "credito"
const valorDoProduto= 13000

let valorFinal=0
let valorEmReais=valorDoProduto/100

if (tipoDePagamento=="credito") {
    valorFinal=valorEmReais-(valorEmReais*0.05)
    console.log("R$"+valorFinal)
}else if (tipoDePagamento=="cheque") {
    valorFinal=valorEmReais-(valorEmReais*0.03)
    console.log("R$"+valorFinal)
}else if (tipoDePagamento=="debito" || tipoDePagamento=="dinheiro") {
    valorFinal=valorEmReais-(valorEmReais*0.1)
    console.log("R$"+valorFinal)
}