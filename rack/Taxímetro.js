let min=25
let km=11.5

let valorDoMin=0
let valorDoTem=0

if (min>=20) {
    min-=20
    valorDoMin=min*0.30+20*0.50
} else {
    valorDoMin=min*0.50
}

if (km>=10) {
    km-=10
    valorDoTem=km*0.50+10*0.70
} else {
    valorDoTem=km*0.50
}

console.log((valorDoMin+valorDoTem)*100)