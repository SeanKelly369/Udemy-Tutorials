let person = { name: 'Mosh'};

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});
// Delete cannot happen when configurable is set to false
//delete person.name;
person.name = 'John';

console.log(Object.keys(person));
