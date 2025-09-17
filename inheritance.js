// one class can inherit properties and methods from another class using the 'extends' keyword.

//base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() { //method
        console.log(`${this.name} ' makes a sound'`);
    }
}

//derived class inheriting from Animal class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //call the parentclass constructor 
        this.breed = breed;
    }

    // overriding the speak method(polymorphism)
    speak() {
        console.log(`${this.name} barks`); // polymorphism
    }
}
const dog = new Dog("rex", "German Shepherd");
dog.speak(); // rex barks