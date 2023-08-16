const lista=[12,17,18,19]

let maioresDeIdade=[]
let cont=0


for (let i = 0; i < lista.length; i++) {
    if (lista[i]>=18) {
        maioresDeIdade[cont]=lista[i]
        cont+=1
    }   
}

if (maioresDeIdade.length==0) {
    console.log("CRESCA E APARECA")
} else {
    let idade=100
    for (const i of maioresDeIdade) {
       if (i<=idade) {
            idade=i
       } 
    }
    console.log(idade)
}


