function contar(){
   
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let jump = document.getElementById('jump')
    let count = document.getElementById('count')
    //count.innerHTML = 'troquei'
   if(inicio.value.length == 0 || fim.value.length == 0 || jump.value.length == 0){
    window.alert('[ERRO] faltam dados!')
   }else {
    count.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let j = Number(jump.value)

    for(let c = i; c <= f; c += j ){
        count.innerHTML += `${c} \u{1F603}`
    }

   }

}
