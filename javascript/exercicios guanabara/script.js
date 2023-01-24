function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var fano = document.getElementById('ano_nascimento')
    var res = document.getElementById('res')
    if(fano.ariaValueMax.length == 0 || Number(fano.value) > ano_atual){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByClassName('sex')
        var idade = ano_atual - Number(fano.value)
        res.innerHTML = "Idade calculada: " + idade
        var genero = ''
        if (fsex[0].checked){
            genero = 'Mulher'
        }else{
            genero = 'Homem'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}