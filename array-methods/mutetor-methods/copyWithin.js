// copy a part of array to another location within the same array.

let arr = [1, 2, 3, 4, 5]
arr.copyWithin(0,3);
console.log(arr);


// copyWithin (target,start,end)
// 0 - this is the index , where copied Elements will be placed 
// 3 - this is the index to start copying from 