// 1. Ways to print in JS
//console.log("Hello World") // to print in console use console.log
//alert("me"); // to alert or the page says use alert
//document.write("This is document write")

// 2. JavaScript Console API
// console.log("Hello World", 4 + 6, "Another log")
// console.warn("This is warning") // It is warning in yellow bg retuned by function
// console.error("This is error") 

// 3. JavaScript Variables
// Variables are containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// 4. DataTypes in JS
// Numbers
var num1 = 455;
var num2 = 56.76;
//Strings
var str1 = "This is a string"
var str2 = "This is also a string"
// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);
// Booleans
var a = true;
var b = false;
// console.log(a,b);

// var und = undefined;
var und//Initially value of variable is undefined
// console.log(und);

var n = null;
// console.log(n);

// Two types of datatype in JS
// 1. Primitive data types: undefined, null, number, string, boolean, symbol 
// 2. Reference data types: Arrays and Objects.

var arr = [1, 2, "Hello", 3, 4];
// console.log(arr)
// Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is: ",a+b)
// console.log("The value of a-b is: ",a-b)
// console.log("The value of a*b is: ",a*b)
// console.log("The value of a/b is: ",a/b)
// Assignment Operators
var c = b;
//c += 2; //12
//c -= 2; //8
//c *= 2; //20
c /= 2; // 5
// console.log(c)
// Comparison Operators
var x = 34;
var y = 56;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x>y)
// console.log(x<y)

//Logical Operators
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
function avg(a, b){
    return (a+b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);


var arr = [1, 2, 3, 4, 5, 6, 7];
/*console.log(arr);
for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}*/
// arr.forEach(function(element){
//     console.log(element)
// })

// let j = 0;
// // const ac = 0;
// // ac++; // Assignment to constant variable

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

//If-Else Statements



let myArr = ["Fan", "Camera", 34, null, true];
//Array Methods
// console.log(myArr.length)
myArr.pop()//Removes last element
myArr.push("Harry") // Adds harry at last
myArr.shift() // removes first element i.e shifts left side
const newLen = myArr.unshift("Harry") ["Harry", "Fan", "Camera", 34, null, true]
// console.log(newLen);
// console.log(myArr);


// Strign Methods in JS
let myString = "Hello World, great to learn JS! World World"
// console.log(myString.length)
// console.log(myString.indexOf("World")) // First occurence of index
// console.log(myString.lastIndexOf("World")) // Last occurence of index
// console.log(myString.slice(0, 3)) // Hel
// console.log(myString.slice(1, 4)) //ell
// d = myString.replace("World", "Ankur")
// console.log(d, myString)

// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); // Gives time in seconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay()); // thursday return 4
// console.log(myDate.getMinutes()) // return ccurrent minute
// console.log(myDate.getHours())

// var age = 41;
// if(age>18){
//     console.log("You are eligible for driving license\n");
// }

// DOM = Document Object Model // Usign dom we can target elements and we change its css or we can add some more class.
// DOM MAnipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created parah";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement); // replaced para by bold 
// removeChild(element); -->removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function(){
//     console.log('The document was loaded'); // to load document use window.onload
// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('click', function(){
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse outside container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Mouse down when clicked on container");
// })

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}
// By using arrow function we don't have to give name of the function.

// JS SetTimeout and SetInterval
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>";
    console.log("I am your log");
}
// clr = setTimeout(logKaro, 5000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setInterval(logKaro, 2000);

// JavaScript Local Storage
// localStorage.setItem('name', 'harry')
// undefined
// localStorage
// Storage {name: 'harry', length: 1}
// localStorage.clear()
// undefined
// localStorage.setItem('name', 'Harry')
// undefined
// localStorage
// Storage {name: 'Harry', length: 1}
// localStorage.getItem('name')
// 'Harry'
// localStorage.clear()
// undefined
// localStorage
// Storage {length: 0}
// localStorage.setItem('name', 'Ankush')
// undefined
// localStorage
// Storage {name: 'Ankush', length: 1}
// localStorage.getItem('name')
// 'Ankush'
// localStorage.removeItem('name')
// localStorage.clear()

// JSON
// Json standard requirs double quote but js object supports single quote
obj = {name: "Ankush", length: 1, a: {this: 'tha\"t'}};
jso = JSON.stringify(obj);
console.log(jso);
typeof(jso);
'string'
typeof(obj);
'object'
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"harry", "length":1, "a":{"this":"that"}}`);
console.log(parsed);

// Template Literals - Backsticks
a = 34;
console.log(`this is my ${a}`)