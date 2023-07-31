const arrayA=[5, 32, 3, 44, 1]
const arrayB=[57, 4, 21, 2, 13]

let resultado=[]

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i]<=arrayB[i]) {
        resultado[i]=arrayA[i]
    }else{
        resultado[i]=arrayB[i]
    }
}

console.log(resultado)