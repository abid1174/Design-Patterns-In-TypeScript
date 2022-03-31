interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

class Cat1 implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Dog implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

const CAT1 = new Cat1('Cosmo', 8)
const DOG = new Dog('Rusty', 12)
CAT1.feed('Fish', 0.1)
DOG.feed('Beef', 0.25)