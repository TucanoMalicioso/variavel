const primeiroNome= "Mario"
const sobreNome= ""
const apelido=""

if (primeiroNome) {
    if (apelido) {
        console.log(apelido)
    }else if (sobreNome) {
        console.log(primeiroNome+" "+sobreNome) 
    }else{
        console.log(primeiroNome)
    }       
}else {
    console.log("Preencha o nome")
}
