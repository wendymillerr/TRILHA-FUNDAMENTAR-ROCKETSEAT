const arrayOfElements = []
const listOfNumbers = document.getElementById('listOfNumbers')
const buttonFinalize = document.getElementById('finalize')



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

function getArray(){
    const p = document.createElement('p')
    
}