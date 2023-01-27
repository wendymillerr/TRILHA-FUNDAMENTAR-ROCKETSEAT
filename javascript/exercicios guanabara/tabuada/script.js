function tabuada(){
    let number = document.getElementById('number');
    let resultado = document.getElementById('results')
    if(number.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(number.value)
        for(let i = 1; i <= 10; i++){
        const option = document.createElement('option')
        option.text = `${n} x ${i} = ${n*i}`
        resultado.appendChild(option)
    }
    }
   
}