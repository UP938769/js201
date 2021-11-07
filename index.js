/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 * 
 * Technique for writing code that passes our unit tests...
 * When you start to code a function, if you have an explanation of what it should do, paste that into your programme as a comment, so you have something to refer back to.
 * Then create the empty function with a code block, and in the code block write comments for each step of what you think needs to be done.
 * Then write the code that makes each comment happen.
 */

'use strict';

function id() {
  return "UP938769";
}

function fn() {
  return 'Ryan';
}

function sn() {
  return 'Harris';
}

function example() {
  // replace this example with
  // your first function then
  // add more below as necessary.

}

// Create an add function that accepts two parameters called a and b, and returns their sum.

function add (a, b){
  const sum = a + b;
  return sum;
}

// Create a subtract function that accepts two parameters, a and b, and subtracts b from a and returns the result. 

function subtract (a, b){
  const sum = a - b;
  return sum;
}

// Create a checkObject function that accepts an object called obj as a parameter and sets the object's property `checked` to `true`.


function checkObject (obj){
  obj.checked = true;
}

// Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true`.

/* 
 * Does the object have an object value in its data property?
 * If there is an object value in its data property set the inner objects checked property to true.
 * 
*/

function checkObjectInside (obj){
 if (obj && obj.data){ // In short this line makes sure that obj *AND* obj.data both exist. If they don't *BOTH* exist then it will return false and stops there. If *BOTH* do exist then it makes the checked value of obj.data true.
   obj.data.checked = true;
 }
}


// Create an arraySet function that accepts three parameters `arr`, `i` and `n`. The first one is an array and the second one an index. The function should place the value of the third parameter into the array at an index specified by the second parameter, if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly. 

/*
 * 3 parameters; arr, i, n
 * arr = array
 * i = index
 * n = value
 * 
 * Place "n" into the array ("arr"). "i" will tell you where to place it
 * "n" will only go into the array if the index given is already a location in the array.
 * Don't need to return anything as the array is modified directly.
*/

function arraySet(arr, i, n){
  if (Number.isInteger(i)){
    if (i >= 0 && i < arr.length){
      arr[i] = n;
    }
  } 
}

/*
 * Create a function `addAll` that accepts an array `arr` as a single parameter. 
 * Assuming an array of numbers is passed, return the result of adding all those numbers.
 * 
 * 
 * Single parameter called 'arr'
 * 'arr' contains an array of numbers
 * Add all of the numbers in the array and return the result.
*/

function addAll(arr){
  
  const add = (previousValue, currentValue) => previousValue + currentValue; // This creates a binding that will take the previous and current values and add them together
  return arr.reduce(add); // This returns the array with the .reduce method. The previous binding is used as a parameter. .reduce is a callback function that runs on each element in an array. Because of the parameter, it add the current value in the array to the previous value of the array and then keeps the sum of both as the previous value. 
}

/*
 * Create a function called `larger` that accepts two numbers "a" and "b" and returns the larger.
 */
function larger(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}

/*
 * Create a function called "largest" that accepts an array "arr" of numbers and returns the largest number in the array.
 * 
 * arr = array of numbers
 * 
 * Return the largest number in the array
 */
function largest(arr){
  let largest = null;

  for (let i = 0; i < arr.length; i++){ // For loop that loops for as long as the length of the array
    if (arr[i] > largest){ // Compares the current value in the array to the variable set up before hand.
      largest = arr[i]; // Gives the current value in the array to the variable as it is bigger than the previous value that the variable held.
    }
  }
  return largest;
}

/*
 * Create a function called compare that accepts two arrays of numbers ("a" and "b") and compares the contents. It should return true of the arrays are identical and false otherwise.
 * 
 * Compare 2 arrays
 * See if they are identical or not
 */
function compare(a, b){
  let answer = true;

  if (a.length === b.length){ // Compares the lengths of both arrays
    for (let i = 0; i < a.length; i++){ //Loops as many times as there are values in array "a".
      if (a[i] === b[i]){ // If the current value in both arrays is the same return true; else return false.
        answer = true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return answer;
}

/*
 * Create a function "addToAll" that accepts an array "arr" and a number "n" as parameters. Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1, 2, 3], 1) should return [2, 3, 4].
 *
 * arr = array
 * n = number
 * 
 * Add "n" to each number in the array
 * 
 * Need to loop through the array and add n to each number in the array.
 * 
 * get element from array
 * add n to the element
 * replace element in the array
 */

function addToAll(arr, n){
  // let newNum = 0;

  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + n;
  }
  return arr;
}

/* Create a function `rememberThis` with one parameter `keepsake` which should be stored in a global variable called 'remembered' (which you need to declare). Each subsequent call to rememberThis should overwrite the value of 'remembered'.
 *
 * 
 * parameter = keepsake
 * keepsake stored in global variable 'remembered'
 * Overwrite 'remembered' each time the function is called
 */
let remembered;

function rememberThis (keepsake){
  remembered = keepsake;
}

/* Write a function `nArray` that takes a parameter `n` and returns an array with `n` numbers. The numbers in the array should increase from 1 to `n`.
 * 
 * Return an array with 'n' amount of numbers
 * n is a number that is given
 * The array should increase from 1 to the number that is currently n
 * 
 * Create a loop to add a number to the end of an array
 * Make it loop n amount of times
 */
function nArray (n){
  let arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr;
}

/* Create a function `addAllOpt` that sums an array (`arr`). If the array is not present or empty, return 0
 * 
 * parameter = arr
 * 
 * Add up all numbers in the array (and return?)
 * If the array is not present or empty return 0
 */

function addAllOpt(arr){
  if (arr != ''){
    const add = (previousValue, currentValue) => previousValue + currentValue;
    return arr.reduce(add);
  } else if (arr == '') {
    return 0;
  } else {
    return 0;
  }
}
