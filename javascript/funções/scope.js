let subject = 'create video'

function createThink(subject){
    //se o parametro subject não existir, será sobrescrito o de cima
    //se não tiver um let na frente do subject e nao tiver o parametro, será sobrescrito
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))