
function sayHello(){
    let message = "Hello There!";

    console.log(message);
}  

function sayHi(name) {

    console.log("Hi " + name);
}

function sum (num1, num2){
let total= num1 + num2;
return total;

//all coded goes here
}

function testArray() {

    let numbers = [121,4,1,45,23,65,23,8,14,84,92,34,89,1,231,9,64];
    
    //access by index
    
    console.log(numbers[0]);

    //add new elements to array
    numbers.push(99); //add 99 to end

    //replace
    numbers[0] = 42; 

    //travel array
    for(let i=0; i < numbers.length; i++) {
      console.log(numbers[i]); 
    } 
    
    for(let i=0; i < numbers.length; i++) {
        let total= 0;
        total=total + numbers[i];
        console.log= (numbers.length); 

}

  
}

function testArray2(){
    for (let i=0; i < 20; i++) {
        if (i !=7 && i !=13){
          
            console.log(i);
        }
    }
}
function init() {
    //at this point All the html has been rendered
    console.log("Intro page loaded");

    sayHello();

    let firstName = "Dustin";
    sayHi(firstName);
    let result= sum(21,21);
    console.log(result);
    testArray();
    testArray2();

}


//when the browser is finish, exec init functio
window.onload = init;