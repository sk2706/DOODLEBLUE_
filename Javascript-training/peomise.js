const registration=new Promise((resolve,reject)=>
{
    const isvalid=true;
    if (isvalid)
    {
        console.log("registration successful")
    }
    else
    {
        console.log("registration failure or error")
    }
})
registration.then((res)=>console.log(res))

const Registration_fail=Promise.reject("registration failure")//1
const Registration_pass=Promise.resolve("registration success")//2
Registration_fail.catch((message)=>console.log(message))//1
Registration_pass.then((message)=>console.log(message))//2
//see output

