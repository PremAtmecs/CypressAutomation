var marks = Array(6)
var marks = [12, 13, 14, 15, 16, 17]
console.log(marks.slice(2, 6))
console.log(marks[2])
marks[3] = 18   //update the array values
console.log(marks)
console.log(marks.length) //find out length of array
marks.push(19)   //adding extra values in end of array
console.log(marks)
marks.unshift(11)    //adding extra value in beggining of array
console.log(marks)
marks.pop()
console.log(marks)   // delete value in end of array
console.log(marks.indexOf(12))   //find out array index value
console.log(marks.includes(25)) //Determine whether an array include a certain element
let sum = 0
for (let i=0; i<marks.length; i++){
    console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

//reduce filter map
let Total = marks.reduce((sum, mark) => sum+mark, 0)
console.log(Total)

var score = [32, 33, 34, 35]
console.log(score)
var evenScore = []
var oddScore = []
for (i=0; i<score[i]; i++){      //print odd or even by using push method
    if(score[i]%2 == 0)
    {
        evenScore.push(score[i])
    }
    else{
        oddScore.push(score[i])
    }
}
console.log(evenScore)
console.log(oddScore)
let evenNumber = score.filter (score => score%2 == 0)
console.log(evenNumber)
let oddNumber = score.filter (score=> score%2 == 1)
console.log(oddNumber)
let mappedArray = evenNumber.map(score=>score*3)
console.log(mappedArray)
var score1 = [12, 13, 14, 15, 16, 17]
let sumValues = score1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValues)
let fruits = ["mango","banana","apple","pomegrante","pineapple"]   //string array sorting by using sort function
console.log(fruits.sort())   //String ascending
console.log(fruits.reverse())   //String descending
var value = [12,003,05,10,17,25]
console.log(value.sort((a,b)=>a-b))  //Integer array sorted by using recursive method
console.log(value.sort((a,b)=>b-a))
