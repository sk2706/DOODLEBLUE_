//Fuction and arrays training
//funtion declaration
function add(a, b) {
    return a + b;
}   
console.log(add(5, 10)); // 15

//parameters and arguments
function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('SathishKumar'); // Hello, SathishKumar!

//return values vs console.log()
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // 50     

//function expressions
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 5)); // 5

//arrow functions   
const divide = (a, b) => {
    return a / b;
}   
console.log(divide(10, 2)); // 5

//default parameters
function greetUser(name = 'Guest') {
    console.log('Hello, ' + name + '!');
}
greetUser(); // Hello, Guest!
greetUser('SathishKumar'); // Hello, SathishKumar!

//scope:where a variable is accessible in the code
//global scope
let course = 'Javascript Training'; // global variable
function printCourse() {
    const message = 'Welcome to the course!'; // local variable
    console.log(message);
    console.log(course); // accessible here
}
printCourse(); // Welcome to the course! Javascript Training
console.log(course); // accessible here
// console.log(message); // Uncaught ReferenceError: message is not defined 

//callbacks functions
function processname(name, callbac) {
    
    callbac(name);
}
function greet(name)
{
    console.log("Hello, " + name + "!");
}
processname("SathishKumar", greet); // Hello, SathishKumar!

//higher order functions
function calculate(a, b, operation) {
    return operation(a, b);
}   
function add(a, b) {
    return a + b;
}   
console.log(calculate(5, 10, add)); // 15


//Array...
const events=["talk","workshop"]
console.log(events[0]);
console.log(events.length);

//create and modify const array 


//add and remove elements from an array push pop shift unshift


//slice() vs splice()

//search array elements indexOf() includes() find() findIndex()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3));
console.log(numbers.includes(4));
console.log(numbers.find(num => num > 3));
console.log(numbers.findIndex(num => num > 3));

//forEach() map() filter() reduce()
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num * 2));
numbers1.map(num => num * 2);
const evenNumbers = numbers1.filter(num => num % 2 === 0);
const sum = numbers1.reduce((acc, num) => acc + num, 0);

//some and every()
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.some(num => num > 3));
console.log(numbers2.every(num => num > 0));

//sort() and reverse()
console.log(numbers2.sort((a, b) => b - a));
console.log(numbers2);

//mutable:push pop shift unshift splice sort reverse 
//new map slice concat 