let numeros=[1, 2, 1]

let cont=0

for (const i of numeros) {
    cont=cont+i
}

if (cont==numeros.length) {
    console.log(cont)
}else{
    cont=cont%numeros.length
    console.log(cont)
}






