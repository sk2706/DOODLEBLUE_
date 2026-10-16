//closure
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