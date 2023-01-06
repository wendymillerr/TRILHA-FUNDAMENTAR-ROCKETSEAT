for (let i = 0; i < 10; i++){
    console.log(i)
}

while(i < 10){
    i++;
    console.log(i)
}

let name = 'Mayk'
let names = ['joao', 'paulo', 'pedro']

for(let char of name){
    console.log(char)
}

for (let name of names){
    console.log(name)
}

let person = {
    name:john,
    age: 30, 
    weight: 86.7
}

for (let property in person){
    console.log(person[property])
}