function f(num1, num2, callback){
    var result = num1 + num2
    callback(result)
}
function showresult(r){
    console.log("Result " + r)
}
f(10,20, showresult)

//own example and implement the callback

function upperCase(msg){
    console.log("my name is " + msg)
}
function handle(name, back){
    back(name)
}
handle('prem', upperCase)

//Promise handling
let myPromise = new Promise((resolve, reject)=>{
    let a = 1+4
    if(a==2){
        resolve('success')
    }
    else{
        reject('failed')
    }
})

myPromise.then((message)=>{
    console.log('This is in the then ' + message)
}).catch((error)=>{
    console.log('This is in the catch ' + error)
})

//Handling promise all

let promise1 = new Promise((resolve, reject)=>{
    var word = 'Prem'
    if(word == 'Prem'){
        resolve('Word is matching ' + word)
    }
    else{
        reject('Word is not matching ' + word)
    }
});

let promise2 = new Promise((resolve, reject)=>{
    var word1 = 'kumar'
    if (word1 == 'kumar'){
        resolve('word is matching1 ' + word1)
    }
    else{
        reject('word is not matching1 ' + word1)
    }
});

Promise.all([
    promise1,promise2
]).then((success)=>{
    console.log("print the status " + success)
}).catch((error)=>{
    console.log("print the error status " + error)
});
    
