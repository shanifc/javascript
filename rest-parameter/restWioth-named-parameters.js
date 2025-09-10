// using rest parameters with named parameters
// function to greet a person with any number of titles

function greet(firstname, lastname,...titles) {
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`titles: ${titles.join(", ")}`);
}

greet("shanif", "mohammed", "bcom", "mern stack devoloper", "author");