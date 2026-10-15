//task1 print your name,course and a number using console.log
console.log('Name: SathishKumar N');
console.log('Course: Javascript Training');
console.log('Number: 42');

//task2 create variables for an evbent name ,ticket price and seats left,print them
let eventName = 'Javascript Training';
let ticketPrice = 50;
let seatsLeft = 10;
console.log('Event Name: ' + eventName);
console.log('Ticket Price: $' + ticketPrice);
console.log('Seats Left: ' + seatsLeft);

//task3 calculate the total price for 3 tickets and check whether it exceeds 500
let totalTickets = 3;
let totalPrice = totalTickets * ticketPrice;
if (totalPrice > 500) {
    console.log('The total price exceeds $500.');
} else {
    console.log('The total price does not exceed $500.');
}
//task4 use if else to check whether a mnumber is positive,negative or zero
let number = -5;    
if (number > 0) {
    console.log('The number is positive.');
}   
else if (number < 0) {
    console.log('The number is negative.');
}   
else {
    console.log('The number is zero.');
}

//task5 use a loop to print even numbers from 2 to 20
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}       
