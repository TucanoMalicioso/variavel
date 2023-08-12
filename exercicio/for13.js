const disjuntors=[false, false, true, false, false, true, false, false]

let disjuntorsLigados=[]
let cont=0

for (let i = 0; i < disjuntors.length; i++) {
    if (disjuntors[i]) {
        disjuntorsLigados[cont]=i
        cont=cont+1
    }  
}

console.log(disjuntorsLigados)