// let i=1

// while (i < 10) {
//     var text = " "
//     text += "The number is " + i;//text = text+ ...
//     i++;
//     console.log(text)
//   }
console.log("  ")
console.log("verifying the odd number by using while and do while")
let i=15
do{
    if(i%2 !== 0){
        console.log("The odd number is #", i);
    }
    i--;
}while(i>=1)

console.log(" ")

console.log("verifying the even number by using for loop")
for (let j=0; j<=30; j++){
    if(j%2==0){
        console.log("The even number is #", j)
    }
}

switch(new Date().getDay())
{
    case 0:
        day = "Sunday"
        break;

    case 1:
        day = "Monday"
        break;

    case 2:
        day = "Tuesday"
        break;

    case 3:
        day = "Wednesday"
        break;

    case 4:
        day = "Thursday"
        break;

    case 5:
        day = "Friday"
        break;

    case 6:
        day = "Saturday"
        break;
}
console.log(day)

let z=0
switch(z){
    case 7:
        console.log("positive number", z)
        break;

    case -7:
        console.log("negative number", z)
        break;

    case 0:
        console.log("number is zero", z)
}
  
  