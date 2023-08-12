let nome='123456789101146547654587'

function organizarLetrasDoNome(nome){
    nome=nome.toString().substring(0, 10)
    let nomeEmMinusculo=""
    if (nome===nome.toUpperCase()) {
        nomeEmMinusculo=nome.toLowerCase()

    } else if (nome===nome.toLowerCase) {
        nomeEmMinusculo=nome

    }else if(nome[0]===nome[0].toLowerCase() && nome.substring(1)===nome.substring(1).toUpperCase()){
        nomeEmMinusculo=nome.substring(0, 1).toUpperCase()+nome.substring(1).toLowerCase()

    }

    console.log(nomeEmMinusculo)
    
}

organizarLetrasDoNome(nome)
