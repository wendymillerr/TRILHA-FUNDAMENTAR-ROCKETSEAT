//callback function

function sayMyName(name){
    console.log('antes de executar a função callback')
    name()//executa a função quefoi enviada como parametro
    console.log(name) // printa a função que foi enviada como parametro

}

sayMyName(
    ()=>{
        console.log('estou em uma callback')
    }
)