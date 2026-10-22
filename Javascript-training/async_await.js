async function getmessage()
{
    throw new Error("error")
    return "hi";
}
getmessage().then(console.log).catch((err)=>console.log(err.message)).finally(()=>console.log("default"))