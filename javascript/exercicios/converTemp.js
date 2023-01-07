
let temp = prompt('informe os graus e a temp ')
checkString(temp);
 function checkString(){
    const CeslsiusExist = temp.toUpperCase().includes('C');
    const fahrenheitExist = temp.toUpperCase().includes('F');
    if (!CeslsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado.')
    }
    if(CeslsiusExist){
        let celsius = Number(temp.toUpperCase().replace('C', ''));
        celsiusToFahrenheit(celsius);
    }else if(fahrenheitExist){
        let fahrenheit = Number(temp.toUpperCase().replace('F', ''))
        fahrenheitToCelsius(fahrenheit);
    }
}

function celsiusToFahrenheit(C){
    let F = C * 9/5 + 32
    console.log(F + 'F')
}

function fahrenheitToCelsius(F){
   let  C = (F - 32) * 5/9 
   console.log(C + 'C')
}