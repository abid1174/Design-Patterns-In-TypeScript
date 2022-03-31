"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log(`Feeding ${this.name} the ${this.constructor.name} ${amount} kg of ${food}.`);
    }
}
class Cat3 extends Animal {
    constructor(name, age, isHungry) {
        super(name, age);
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(`${this.name} the ${this.constructor.name} is not hungry.`);
        }
    }
}
class Dog3 extends Animal {
}
const cosmo = new Cat3("Cosmo", 8, false);
const rusty = new Dog3("Rusty", 12);
cosmo.feed("Fish", 0.1);
rusty.feed("Beef", 0.25);
