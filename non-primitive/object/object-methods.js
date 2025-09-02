// you can store function inside objects- these are called object methods

const car = {
    brand:"toyota",
    start: function(){
        console.log("car started"); 
    }
}

car.start();

// /'this' keyword- it refers the object its self.(used to access properties and methods)

const person= {
    name:"shanif",
    age:20,
    greet: function(){
        console.log(`hello, my name is ${this.name}`);  
    }
}
person.greet();