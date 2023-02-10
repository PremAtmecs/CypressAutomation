let person= {
    firstName: "prem",
    lastName: "kumar",
    age: 25,
    fullName: function(){
        console.log(this.firstName+this.lastName); 
    }
}
console.log(person.fullName());
console.log(person.lastName);
console.log(person['lastName']);
person.firstName = "premkumar"
console.log(person.firstName)
person.gender = "male"
console.log(person.gender)
delete person.gender
console.log(person)
console.log('gender' in person);
//print all the values of the JavaScript object
for (let key in person){
    console.log(person[key]);
}