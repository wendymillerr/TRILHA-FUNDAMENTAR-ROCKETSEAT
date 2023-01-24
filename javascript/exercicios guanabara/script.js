function verificar(){
    
    var data = new Date()
    var ano_atual = data.getFullYear()
    var fano = document.getElementById('ano_nascimento')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano_atual){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByClassName('sex')
        var idade = ano_atual - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        res.innerHTML = "Idade calculada: " + idade
        var genero = ''
        if (fsex[0].checked){
            genero = 'Mulher'
            if(idade = 0 || idade <=10){
                img.setAttribute('src', 'menina-bebe.jpg')
            }
        }else{
            genero = 'Homem'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}