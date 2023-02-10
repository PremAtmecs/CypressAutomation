function add(a,b)
{
    return a+b
}
//let sum = add(10,20)
console.log(add(10,20))

//Another way we can create a method
let sumOfInteger = function(c,d)
{
    return c+d
}
console.log(sumOfInteger(2,3))

//onemore way to create a method

let sumOfNumber =(k,l)=> k+l
console.log(sumOfNumber(5,5))

function greetUser(name)
{
    let c = name + " learning" + " Javascript"
    //return name
    console.log(c)
}
//console.log(greetUser("prem"))
greetUser("prem")

let user = function(name)
{
    let d = name +  " learning " + " Javascript"
    console.log(d)
}
user("prem")

let userName = (k)=>k
console.log(userName("prem"))


var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      }
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  