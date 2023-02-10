module.exports = class Person{
    age = 25   //property
    get location(){           //property
        return "Canada"
    }
    //constructor is method which execute by default when you create object of the class
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){     //object
        console.log(this.firstName + this.lastName)
    }

}
// let person = new Person("prem ","kumar")
// let person1 = new Person("hello"," world")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())