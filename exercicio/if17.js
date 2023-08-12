const valorDoProduto=100000
const quantidadeDoParcelamento=10
const valorPago=300

let valorEmReal=valorDoProduto/100
let valorDaParcela=0
let valorDoRestanteDeParcelas=0

if (valorPago<valorEmReal) {
    valorDaParcela=valorEmReal/10
    valorDoRestanteDeParcelas=quantidadeDoParcelamento-(valorPago/valorDaParcela)

    console.log("Restam "+valorDoRestanteDeParcelas+" parcelas de "+valorDaParcela)
}else{
    console.log("Já terminou de pagar")
}