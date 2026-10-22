function register(flag)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(flag)
            {
                resolve("registration confirmed")
            }
            else{
                //reject("registration failed")
                 reject(new Error("registration failed"))
            }
        },1000);
    })
    
}
register(true).then(console.log).catch(console.error).finally(console.log("default1"))
register(false).then(console.log).catch((err)=>console.log(err.message)).finally(console.log("default2"))
