// async make a function that will return a Promise
// await pauses the function until the Promise is resolved or rejected
// look & behave like synchronous (more effective &  responsive)


function fetchData() {
    return newPromise((resolve) => {
        setTimeout(() => {
            resolve("data loaded!")
        }, 2000)
    });
}

async function getData(){
    console.log("start");
    
    const result=await fetchData(); //until the promise is resolved
    console.log(result);

    console.log("end");
}
getData();
