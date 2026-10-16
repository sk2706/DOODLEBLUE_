//task 1:create a global campusName  and print inside a function
let campusName="SAEC";
function inside()
{
    console.log(campusName);
}
inside();

//task2 create an if block with let and var variables test which is accessibl;e outside
if(true)
{
    let x=1;
    var y=1;
}
console.log(y);
//console.log(x) reference error

//task 3 predict var and let behaviour when logged before declaration run safe examples separately
console.log(a);
var a=10;

//console.log(b);
let b=50;

//task4 create makecounter with a private cout variable and return a function that increments it
function Makecounter(start)
{   let count=start;
    return function(){
        count+=1;
        console.log(count);
    }
}

let counter1=Makecounter(5);
counter1()
counter1();
let counter2=Makecounter(7);
counter2();
counter2();

function Bank() {
    let balance = 0;
    function acc()  {
        balance += 100;
        console.log(balance);
    }
    return acc;
}   

let karthikAccount = Bank();
let monishaAccount = Bank();
karthikAccount(); // Output: 100
karthikAccount(); // Output: 200
monishaAccount();  // Output: 100
monishaAccount(); //output


