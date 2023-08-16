let valores=[0, 5, 6, 10, 11]
let podemJogar=[]
let min=2
let max=10

let cont=0

for (const i of valores) {
    if (i>=min && i<=max) {
        podemJogar[cont]=i
        cont+=1
    } 
}

console.log(podemJogar)