// A Symbol is a unique identifier, === comparison will always return false
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // Both lines of code below do the exact same thing
    //this.radius = radius;
    //this['radius'] = radius;
    this[_radius] = radius; // Symbols cannot be directly accessed
  }

  // Computed property name
  [_draw]() {

  }
}

const c = new Circle(1);

// Underscore used to symbolise a private variable
//c._radius

// Way of accessing Symbols
console.log(Object.getOwnPropertySymbols(c)[0]);
console.log(c[key]);
