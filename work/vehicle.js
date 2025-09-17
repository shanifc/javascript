// Base class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    move() {
        console.log(`The ${this.type} is moving`);
    }
}

// Derived class 1
class Car extends Vehicle {
    constructor(type, brand) {
        super(type); // call parent constructor
        this.brand = brand;
    }

    // overriding move method
    move() {
        console.log(`The ${this.brand} car is driving on the road`);
    }
}

// Derived class 2
class Bike extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }

    // overriding move method
    move() {
        console.log(`The ${this.brand} bike is speeding down the street`);
    }
}

// Object creation
const myCar = new Car("car", "Toyota");
const myBike = new Bike("bike", "Yamaha");

myCar.move();  // The Toyota car is driving on the road
myBike.move(); // The Yamaha bike is speeding down the street