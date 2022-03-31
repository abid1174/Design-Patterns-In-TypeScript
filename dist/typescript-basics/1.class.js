"use strict";
class Cat {
    constructor(name) {
        this.stepWalked = 0;
        this.name = name;
    }
    walk(steps) {
        console.log(`${this.name} the cat has walked ${steps} steps.`);
        this.stepWalked += steps;
    }
    totalStepCount() {
        return this.stepWalked;
    }
}
const CAT = new Cat('Cosmo');
CAT.walk(20);
CAT.walk(20);
console.log(`${CAT.name} the cat, has walked a total of ${CAT.totalStepCount()} steps.`);
