// splice() used to add, remove or replace elemets in an array
// modify arrays

let fruits = ['apple','banana','orange']
fruits.splice(1, 1, 'grape','kiwi');
console.log(fruits)

// start = 1 --> begins at index 1 - (banana)
// delete-count = 1 --. remove 1 element
//add 'grape' & 'kiwi' at index 1