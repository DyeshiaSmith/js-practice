const myArr = [1, 2, 3, 4];

//Array DESTRUCTURING ASSIGNMENT (x will be 1 y will be 2 etc)
const [x, y] = myArr;

console.log(x, y, myArr);

const covid = [1, 3, 5, 9];

const [per1, per2, per3] = myArr;

console.log(per1, per2, per3);

// OBJECT DESTRUCTURING
const me = {
  name: "Manav",
  age: 23,
  car: "Ford"
};

const { name, age } = me;
console.log(name, age);

console.log(me.name);
console.log(me["name"]);

const car = {
  make: "dodge",
  year: 2013,
  model: "avenger"
};
const { make, year } = car;
console.log(make, year);

console.log(car.make);
console.log(car["make"]);
