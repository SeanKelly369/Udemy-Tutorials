const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {

      }
    });
    // Used to access data in one WeakMap
    //privateProps.get(this).radius;


    // Approach above places private information in one WeakMap.  Below uses separate WeakMaps

    // _radius.set(this, radius);
    //
    // _move.set(this, () => {
    //   console.log('move', this);
    // });
  }

  draw() {
  //console.log(_radius.get(this));
  _move.get(this)();
  console.log('draw');
  }
}

const c = new Circle(1);
