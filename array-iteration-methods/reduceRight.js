// same as reducer , but start from the end of array

let nums = [10, 20];
let result = nums.reduceRight((acc, curr) => acc - curr,10 )
console.log(result)