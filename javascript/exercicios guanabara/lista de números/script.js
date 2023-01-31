const arrayOfElements = []
const listOfNumbers = document.getElementById('listOfNumbers')
const paragrafo = document.getElementById('paragrafos')



function inputElementInArray(){
    const number = document.getElementById('number')
        if(arrayOfElements.indexOf(number.value) == -1){
            arrayOfElements.push(number.value)
            const option = document.createElement('option')
            option.text = `Valor ${number.value} adicionado.`
            listOfNumbers.appendChild(option)
        }else{
            window.alert('Erro! esse número já foi inserido.')
        }
}

function soma(){
    var soma = 0;
    for(let i = 0; i < arrayOfElements.length; i++){
        soma += Number(arrayOfElements[i]);
    }
    return soma;
}

function maxElementOfArray(){
    let max = 0;
    for(let i = 0; i < Number(arrayOfElements.length); i++){
        
        if (arrayOfElements[i].value > max){
            max = arrayOfElements[i].value;
        }
    }
 
    return max;
}

function minElementOfArray(){
    min = arrayOfElements[0];
    for(let i = 0; i < Number(arrayOfElements.length); i++){
       if (arrayOfElements[i] < min){
        min = arrayOfElements[i];
       }
    }
    return min;
}

function average(){

   let somaDosElementos = soma();
   let average = somaDosElementos / arrayOfElements.length;
   return average;

}

function getArray(){
 window.alert('entrou')
 paragrafo.innerHTML = "mudou"
 
    let min = minElementOfArray();
    let somaOfElements = soma();
    let max = Math.max.apply(null, arrayOfElements);
    let averageElements = average();
   
    
    paragrafo.innerHTML = 
    `Ao todo, temos ${arrayOfElements.length} números cadastrados. \n
    O maior valor informado foi ${max}. \n
    O menor valor informado foi ${min}.\n
    Somando todos os valores, temos ${somaOfElements}\n
    A média dos valores digitados é ${averageElements}.`

}
