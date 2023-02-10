const flag = true

// if else structure
console.log("if else structure")
if (!flag)
{
    console.log("condition satisfied")
}
else{
    console.log("condition not satisfied")
}

// while loop structure

console.log("while loop structure")
let i = 0
while(i<10){
    i++
    console.log(i)
}

// do while structure

console.log("do while structure")
do{
    i++
}while(i<10)
console.log(i)
console.log("*************************")

// for loop structure

console.log("for loop structure using AND operator")
for(let k=1;k<=100;k++)
{
    if (k%2 == 0 && k%5 == 0)   //using AND operators
    {
        console.log(k)
    }

}

console.log("for loop structure using OR operator")
for(let l=1;l<=10;l++){
    if (l%2 == 0 || l%5 == 0)   //using OR operator
    {
        console.log(l)
    }
}