//task 1 write calculateTotal(price,quantity) that returns the total.
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(10, 5)); // 50

//write a function that accepts a name and returns a greeting message.
function greetUser(name) {
    return 'Hello, ' + name + '!';
}
console.log(greetUser('SathishKumar')); // Hello, SathishKumar!

//create an array of five event names and print its length
const events = ['Talk', 'Workshop', 'Seminar', 'Conference', 'Meeting'];
console.log(events.length); // 5

//us filter() to keep numbers greater than 10
const num=[1,2,3,20,31,10,40];
console.log(num.filter(i=>i>10)); // [20, 31, 40]

//use map() to create a new array with each number doubled
console.log(num.map(i=>i*2)); // [2, 4, 6, 40, 62, 20, 80]

//use reduce() to calculate the sum of all numbers in the array
const nums=[20,30,40]
console.log(nums.reduce((acc, i) => acc + i, 0)); // 90

//explain which methods change the original array and which do not.
//Methods that change the original array (mutable methods):
//1. push() - adds one or more elements to the end of an array.
//2. pop() - removes the last element from an array.
//3. shift() - removes the first element from an array.
//4. unshift() - adds one or more elements to the beginning of an array.
//5. splice() - adds, removes, or replaces elements at any specific index.
//6. sort() - rearranges the elements of the array in place.
//7. reverse() - reverses the order of the elements in place.
//Methods that do NOT change the original array (immutable methods) 
//1. map() - returns a new array with transformed elements.
//2. filter() - returns a new array with elements that pass a test condition.
//3. reduce() - returns a single accumulated value.
//4. slice() - returns a shallow copy of a portion of an array.
//5. concat() - merges two or more arrays and returns a new array.