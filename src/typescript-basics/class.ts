class Cat {
    name: string;
    stepWalked: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    walk(steps: number): void {
        console.log(`${this.name} the cat has walked ${steps} steps.`);
        this.stepWalked += steps;
    }

    totalStepCount(): number {
        return this.stepWalked;
    }
}

const CAT = new Cat('Cosmo');
CAT.walk(20);
CAT.walk(20);
console.log(`${CAT.name} the cat, has walked a total of ${CAT.totalStepCount()} steps.`)