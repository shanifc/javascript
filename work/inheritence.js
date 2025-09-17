// Base class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    move() {
        console.log(`The ${this.type} is moving`);
    }
}

// Derived class inheriting from Vehicle
class Car extends Vehicle {
    constructor(type, brand) {
        super(type); // call the parent class constructor
        this.brand = brand;
    }

    // overriding the move method (polymorphism)
    move() {
        console.log(`The ${this.brand} car is driving on the road`);
    }
}

// Object creation
const myCar = new Car("car", "Toyota");
myCar.move();


