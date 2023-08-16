let carta="3"

const naipesDeCartas=["Q", "J", "K", "A", "2", "3"]
let manilha=""

for (let i = 0; i < naipesDeCartas.length; i++) {
    if (carta==naipesDeCartas[i]) {
        if (carta==naipesDeCartas[naipesDeCartas.length-1]) {
            manilha=naipesDeCartas[0]
        } else {
            manilha=naipesDeCartas[i+1]
        }    
    }
}

console.log(manilha)