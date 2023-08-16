let precos=[200, 150, 50, 100]

let valorFinal=0
let menorValor
let indice

if (precos.length<3) {
    for (const i of precos) {
        valorFinal=valorFinal+i
    }
}else{
    for (let i = 0; i < precos.length; i++) {
        if (precos[i]<=precos[i+1]) {
            menorValor=precos[i]
            indice=i
        }else if (precos[i]>=precos[i+1]) {
            menorValor=precos[i+1]
            indice=i+1
        }
    }

    precos[indice].push(menorValor*0,5)
    console.log(menorValor)
    console.log(precos[indice])
}