 // first function 
 export function goodFruits(apple, orange, banana){
  //  console.log(`The good fruits are: ${apple}, and ${orange}, and ${banana}`);
}
//goodFruits("Apple", "Orange", "Banana");

//second function
export function metersToCentimeters(meters) {
    return meters * 100;
}
//const centimeters = metersToCentimeters(2.5); // Convert 2.5 meters to centimeters
//console.log(`2.5 meters is equal to ${centimeters} centimeters`);

// Third Function
export function rectangleArea(number1, number2) {
    let area = number1 * number2; 
    return area; 
} 
//let result = rectangleArea(5,10);
//console.log(result);

//  Fourth Function
export function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3