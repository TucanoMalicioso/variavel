const jogadores=[
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  let quemJogouUm=[]
  let quemJogouZero=[]

for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada==1) {
        quemJogouUm.push(jogadores[i].nome)
    }else if (jogadores[i].jogada==0) {
        quemJogouZero.push(jogadores[i].nome)
    }   
}

if (quemJogouUm.length==1) {
    console.log(`${quemJogouUm}`)
}else if(quemJogouZero==1){
    console.log(`${quemJogouZero}`)
}else{
    console.log("NINGUEM")
}

//console.log(quemJogouUm)
//console.log(quemJogouZero)
