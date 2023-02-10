function displayNumber(){
    for ( var i = 1; i<=10; i++){
       console.log("print number #" + i)
    }

    if(true){
        let msg = "Hello Everyone"
        console.log(msg)    //msg variable will work bcoz it declare by let with in block
    }
     console.log(i)  //i variable will work bcoz it declare by var with in function
    
}
displayNumber()


