//function that are passed as arguments to other functions

// use callback-functions
// 1.asynchronous functions
// 2.avoid blocking code exicution

function greetUser(name){
    console.log(`hello, ${name}`);
}

// this function takes anothor function (callback) 
function getUserInput (callback){
    const name = "liyara";
    callback(name);
}

// getUserInput pass greetUser as a callback
getUserInput(greetUser);