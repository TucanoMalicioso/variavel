const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirCarinho: 
        function imprimirResumoDoCarinho(carrinho){
            let total=0
            
            for (let i = 0; i < carrinho.produtos.length; i++) {
                total=carrinho.produtos[i].precoUnit+total
                
            }
            
            
            console.log(`
            Cliente: ${carrinho.nomeDoCliente}
            Total de itens: ${carrinho.produtos.length}
            Total a pagar: ${total/100}
            `)
        }

    
}



carrinho.imprimirCarinho(carrinho)

