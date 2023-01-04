let weight = 85 

console.log(typeof weight)

nome = 'wendy'
age = 17
stars = 17.5
isSubscribed = true

let student = {
  name: 'maik',
  age: 22,
  stars: 5.0,
  isSubscribed: false
  
}
console.log(`o ${student.name} pesa ${weight} quilos`)

let students = [
  student
];

console.log(students)

console.log(students[0])

const john = {
  name: 'john',
  age: 23,
  stars: 10.0,
  isSubscribed: true
}

students[1] = john

console.log(students[1])
