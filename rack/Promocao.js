let precos=[0,0,0,0]

let valorFinal=0
let menorValor
let indice



if (precos.length>=2) {
    for (let i = 0; i < precos.length; i++) {
        if (precos[i]<=precos[i+1]) {
            menorValor=precos[i]
            indice=i
        }else if (precos[i]>=precos[i+1]) {
            menorValor=precos[i+1]
            indice=i+1
        }
    }

    precos[indice]=menorValor*0.5

    for (const i of precos) {
        valorFinal=valorFinal+i
    }
    
    console.log(Math.round(valorFinal))
}else{
     for (const i of precos) {
        valorFinal=valorFinal+i
    }
     console.log(Math.round(valorFinal))
}