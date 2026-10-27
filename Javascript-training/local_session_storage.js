let colour="blue"
localStorage.setItem("col",colour)
let res=localStorage.getItem("col")
console.log(res)
document.getElementById("body").style.backgroundColor=res;