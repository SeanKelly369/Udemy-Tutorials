// strict by default no longer points to the global object
'use strict';

const Circle = function() {
  this.draw = function() { console.log(this); }
};

const c = new Circle();

// Method Call
c.draw();

// Reference stored in draw constant
const draw = c.draw;

// Function Call
draw();
