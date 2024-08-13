// Save file with name file1.js
// document.write("CALC");


// var x = 120;
// var y = 30;

// document.write("Addition=",x+y,"<br>")
// document.write("Subtraction=",x-y,"<br>")
// document.write("Multiplication=",x*y,"<br>")
// document.write("Division=",x/y,"<br>")

// --------------------------------------------------------------


// console.log("Hello, This is console");

// --------------------------------------------------------


// var x = 120;
// function xyz(){
//     var y = 30;
// }
//     console.log(x,y);


// --------------------------------------------------------------


// let x =12;
// { 
//     let y = 30
// }
// console.log(x,y);


// ---------------------------------------------------------------


// const x = 12;
// {
//     const y = 30
//           y = 45
//       console.log(x,y);    
// }


// ----------------------------------------------------------------

// let a = 10;
// document.write(a, "<br/>")

// let b = 5;
// document.write(b, "<br/>")

// let sum = a + b;
// document.write(sum, "<br/>")

// let difference = a - b;
// document.write(difference, "<br/>")

// let product = a * b;
// document.write(product, "<br/>")

// let quotient = a / b;
// document.write(quotient, "<br/>")

// let remainder = a % b;
// document.write(remainder, "<br/>")

// let isEqual = (a == b);
// document.write(isEqual, "<br/>")

// let isNotEqual = (a != b);
// document.write(isNotEqual, "<br/>")

// let isGreater = (a > b);
// document.write(isGreater, "<br/>")

// let logicalAnd = (a > b && b < 10);
// document.write(logicalAnd, "<br/>")

// --------------------------------------------------------------

// let fname = "John";
// document.write("Hello ", fname, "<br>")

// let age = 30;
// document.write('Age', age, "<br>")

// let isStudent = true;
// document.write(`Student - ${isStudent? "Yes": "No"} <br>`)

// let emptyValue = "null";
// document.write(`About us ${emptyValue || "Write Something"}<br>`)

// let uninitialized;
// document.write(!uninitialized && "Fill detail completely")

// ----------------------------------------------------------------


// let age = 18;
// if(age>17){
//     document.write("Eligible for vote")
// } else {
//      document.write("Not Eligible for vote");
// }
// document.write("<br>")

// //or

// document.write(age> 17 ? "Eligible for vote": "Not Eligible for vote")

// --------------------------------------------------------------

// let number = prompt("Enter Number");

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0){
//     console.log("The number is negative.");
// }else {
//     console.log("The number is zero.");
// }

// ------------------------------------------------------------

// let fruit = prompt("Enter fruit name");

// switch (fruit) {
//     case "apple":
//         console.log("You choose an apple.");
//         break;
//     case "banana":
//         console.log("You choose a banana.");
//         break;
//     default:
//         console.log("Unknown fruit.");
// }

// ---------------------------------------------------------------


// Simple function

// function greeting(){
//     document.write("Happy Independence Day<br>")
// }
// greeting()
// greeting()





// function Expression

// let day = function(){
//     document.write("Have a nice day<br>")
// }
// day()




// arrow function

// let msg = () => {
//     document.write("Happy Birthday<br>")
// }
// msg()
// msg()





// iife(immediately invoke function expression)

// (function(){
//     document.write("This is IIFE Function")
// }
// ());

// ----------------------------------------------------------------

function morning(){
         document.getElementById("demo").innerHTML = "Good Morning"
         document.getElementById("mode").style.background = "skyblue"
         document.getElementById("mode").style.Color = "White"    
    }
function afternoon(){
        document.getElementById("demo").innerHTML = "Good Afternoon"
        document.getElementById("mode").style.background = "#f9f5a2" 
        document.getElementById("mode").style.Color = "White"  
    }     
function evening(){
        document.getElementById("demo").innerHTML = "Good Evening"
        document.getElementById("mode").style.background = "goldenrod" 
        document.getElementById("mode").style.Color = "White"  
    }
function night(){
        document.getElementById("demo").innerHTML = "Good Night"
        document.getElementById("mode").style.background = "black"  
        document.getElementById("mode").style.Color = "white"  
    }
function greeting(){
        document.getElementById("demo").innerHTML = "Have a nice day"
        document.getElementById("mode").style.background = "Yellow"  
        document.getElementById("mode").style.Color = "White" 
    }     