// object is a collectionj of key-value pairs
// used to multiple values in a single variables & the value

const person = {
    name: 'shanif',
    age: 20,
    isStudent: true
}

console.log(person.name);
console.log(person["age"]);

// add or modify datas
person.city = "new york";
person.age = 31;

delete person.city;
console.log(person);