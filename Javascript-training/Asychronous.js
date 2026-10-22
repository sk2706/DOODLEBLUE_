console.log("start",Date.now())//synchronous call stack()
setTimeout(()=>console.log("from timeout",Date.now()))//call stack=>web api=>macro=>call stack(after sync all finished and all  micro tasks finished )
Promise.resolve().then(()=>console.log("from promise",Date.now()))//call stack=>micro(then callback)=>call stack(after synchronous code finished)
console.log("Finish",Date.now())//call stack
