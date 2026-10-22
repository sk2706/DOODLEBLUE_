console.log("Registration recieved");
setTimeout(() => {
   console.log("Registration confirmed") 
}, 500);
console.log("continue  using your application");

const id=setInterval(() => {
    console.log("one");
},1000);
setTimeout(()=>clearInterval(id),3000);