class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {

  }

  // Stance Method - used to create utility functions that aren't tied to a particular object/class
  static parse(str) {
      const radius = JSON.parse(str).radius;
      return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
