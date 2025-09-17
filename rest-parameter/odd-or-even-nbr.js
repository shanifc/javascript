function oddEven(...numbers) { //rest parameter
    return numbers.map (num => num % 2 === 0 ? 'even' : 'odd');
}

console.log(oddEven(1, 2, 3, 4, 5)); 