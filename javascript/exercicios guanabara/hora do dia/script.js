function load(){
    var msg = window.document.getElementById('message');
    var img = window.document.getElementById('photo');
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    msg.innerHTML = `Agora são ${hour} horas e ${minute} minutos`;
    if(hour >= 0 && hour < 12){
        img.innerHTML = '<img src="imagem/manha.jpg">'
    } else if(hour >= 12 && hour < 18){
        img.innerHTML = '<img src="imagem/tarde.jpg">'
    } else {
        img.innerHTML = '<img src="imagem/noite.jpg">'
    }

}
