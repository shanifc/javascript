const person = { name: "shanif", age: 20, country: "india" };

// basic destructuring
const { name, age } = person;
console.log(name);
console.log(age);

// renaming variables
const { country: nation } = person;
console.log("nation: ", nation);

// default values
const { gender = "male" } = person;
console.log("gender: ", gender);

console.log("person.. ", person);
