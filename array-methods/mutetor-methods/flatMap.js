// maps each elements 7 then flattens the result one level deep.

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x, x * 2]);
console.log(result);