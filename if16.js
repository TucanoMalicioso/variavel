const idadeDoAluno=17
const possuiResponsavel=false

if (idadeDoAluno>18 || possuiResponsavel) {
    console.log("Rematricula realizada com sucesso")
}else if (idadeDoAluno<18 && possuiResponsavel==false) {
    console.log("Não é possivel fazer a rematricula")
}