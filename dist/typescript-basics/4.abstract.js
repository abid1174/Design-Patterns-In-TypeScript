"use strict";
class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log("Feeding " +
            this.name +
            " the " +
            this.constructor.name +
            " " +
            amount +
            " kg of " +
            food);
    }
}
class Cat2 extends Animal2 {
    constructor(name, age, isHungry) {
        super(name, age);
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(this.name + " the " + this.constructor.name + " is not hungry.");
        }
    }
}
class Dog2 extends Animal2 {
}
const CAT2 = new Cat2("Cosmo", 8, false);
const DOG2 = new Dog2("Rusty", 12);
CAT2.feed("Fish", 0.1);
DOG2.feed("Beef", 0.25);
