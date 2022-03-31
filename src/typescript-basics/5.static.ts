class Circle {
  radius: number;
  static PI = 3.14;

  constructor(radius: number) {
    this.radius = radius;
  }
}

const c1 = new Circle(1);
const c2 = new Circle(2);
const c3 = new Circle(3);

console.log(`Circle 1 area = ${Circle.PI * c1.radius}`);
console.log(`Circle 1 area = ${Circle.PI * c2.radius}`);
console.log(`Circle 1 area = ${Circle.PI * c3.radius}`);
