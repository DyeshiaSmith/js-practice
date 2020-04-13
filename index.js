let myCar = "Mazda";

/**
 * Let's get 'you' the 'same' car as me.
 * Since we are working with PRIMITIVES,
 * this means that 'your car' will be a separate 'copy' of mine.
 */
let yourCar = myCar; // 'you' have your own 'Mazda.'

// I am replacing my car.
myCar = "Ford";

console.log(myCar); // 'Ford'

// Your car is the same
console.log(yourCar); // 'Mazda'
