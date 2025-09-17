const students = [
    { name: "shanif", age: 20, grade: "A" },
    { name: "shahal", age: 21, grade: "A+" },
    { name: "firnas", age: 19, grade: "B+" },
]

// accessing data
console.log(students[0].name);
console.log(students[1].grade);

// looping through array of objects
students.forEach(student => {
    console.log(`${student.name} is ${student.age} grade ${student.grade}`);
});