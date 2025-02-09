import {goodFruits} from './app2.js';
goodFruits("Apple", "Orange", "Banana");
console.log(`The best fruit is ${goodFruits("Apple")}`);

import {metersToCentimeters} from './app2.js';
const centimeters = metersToCentimeters(2.5);
console.log(`2.5 meters is equal to ${centimeters} centimeters`);


import {rectangleArea} from './app2.js';
let result = rectangleArea(5,10);
console.log(result);

import { createCounter } from './app2.js';
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


/* Anotaciones 
 The traditional/classical way to import a module in Node.js is to use the "require" function:
- COMMON JS (CommonJS) => using the "require()" syntax
*/ 