const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  // Make radius look like a method
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if(value <= 0) throw new Error('invalid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
