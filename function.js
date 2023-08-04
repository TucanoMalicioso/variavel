const carro={
    ligado: false,
    velocidade:0
}

function mensagen(carro) {
    let estado=""
    if (carro.ligado==true) {
        estado="ligado"
    }else{
        estado="desligado"
    }
    console.log(`Carro ${estado}. Velocidade: ${carro.velocidade}`)
}

function ligar(carro){
    if (carro.ligado==true) {
        console.log("Este carro já está ligado")
    }else{
        carro.ligado=true
        mensagen(carro)
    }
    
}

function desligar(carro){
    if (carro.ligado==false) {
        console.log("Esta carro já está desligado")
    }else{
        carro.ligado=false
        carro.velocidade=0
        mensagen(carro)
    }
    
}

function acelerar(carro) {
    if (carro.ligado==false) {
        console.log("Não é possivel acelerar um carro desligado")
    }else{
        carro.velocidade+=10
        mensagen(carro)
    }
    
}

function desacelerar(carro) {
    if (carro.ligado==true) {
        carro.velocidade=carro.velocidade-10
        mensagen(carro)
    }else{
        console.log("Não é posivel desacelerar um carro desligado")
    }
   
}

desligar(carro)
ligar(carro)
ligar(carro)
acelerar(carro)
acelerar(carro)
desacelerar(carro)
desligar(carro)
acelerar(carro)
desacelerar(carro)



//ligar(carro)
//desligar(carro)
//acelerar(carro)
//desacelerar(carro)


