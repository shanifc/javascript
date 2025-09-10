// using spread operator to merge two objects

const obj1  = { name:'apple'};
const obj2 = {color:'red', taste:'sweet'};
const merged = {...obj1, ...obj2};//merging two objects
console.log(merged);