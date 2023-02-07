



function insert(firstNumber){
   const number = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = `${number}${firstNumber}`;
}

function clearScreen(){
   document.getElementById('resultado').innerHTML = " ";
}

function clearLastElement(){
    const elements = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = elements.substring(0, elements.length - 1);
}

function calculate(){
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}