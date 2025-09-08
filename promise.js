// const promise = new promise((resolve,reject)=>{
// asynchronous operation
// })

// .then = exicute the promises resolved
// .catch = exicute the Promise is rejected
// .finaly = exicutes regadless of the promise outcome

let myPromise = new Promise((resolve, reject) => { //creating to new promise
    let success = false;

    setTimeout(() => {
        if (success){
            resolve('Promis resolve successfuly!')
    }else {
        reject('Promise rejected')
    }
    }, 2000)
})

myPromise
    .then(result =>console.log(result)) // then the promise is resolved
    .catch(Error =>console.log(Error))// then the promise is rejected
    .finally(()=>console.log("Promise exicution finished"))// always working