//task1 create a book object with tittle author and price and update price

let Book={
    Tittle:"Lords of ring",
    Author:"Karthick",
    Price:100
}
Book.Price=500;
console.log(Book.Price);

//task2 create a nested user object and print the city
let Student={
    Name:"mrsk",
    address:{city:"chennai"}
}
console.log(Student.address.city);

//task3: create an array of three product objects and print each product name.
let arr=[{pro_name:"laptop"},{pro_name:"tv"},{pro_name:"fridge"}];
arr.forEach(ele => {console.log(ele.pro_name)});

//task4:use destructing to extract two properties from an obj

let des={
    Name:"mrsk",
    ph:9840655247
}
const{Name:studentname,ph:num}=des;
//const studentname=des.Name
//const num=des.ph
console.log(studentname," ",num);


//task5:use spread to copy an array and combine array 
let a=[1,2,3];
let b=[4,5,6];
let c=[...b];
let d=[...a,...c];
console.log(d);

//task6: write a function that uses rest parameters to add any num of values

function add(...others)
{
    console.log(others.reduce((sum,num)=>sum=sum+num,0));
}
add(1,2,3,4);