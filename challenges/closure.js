// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction console.logs internal within it's scope, so it's able to access the properties of internal. nestedFunction uses a closure to pull data from internal.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let num = [];
const summation = function(x){
  for (i = 0; i = x; i++){ 
    num.push[i];

  };
  return num.reduce((a, b) => a + b, 0);
};
console.log(summation(4));