function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function() {
  console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(3);


// Type c1.toString() in Console
Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}

// Returns instance members
console.log(Object.keys(c1));


// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

// Own property is another name for instance property 
