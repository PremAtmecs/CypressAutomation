// myColour = ["red","blue","green","yellow"]
// console.log(myColour.toString())
// console.log(myColour.join())
// console.log(myColour.join('+'))
const Person = require('./basics9')
var value = [3,2,-1,6,3,-2,0]
console.log(value.sort((a,b)=>a-b))
console.log(value.sort((a,b)=>b-a))

var person = new Person("prem", "kumar")
console.log(person.fullName());