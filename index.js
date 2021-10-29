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
 if (obj && obj.data){ // In short this line makes sure that obk *AND* obk.data both exist. If they don't *BOTH* exist then it will return false and stops there. If *BOTH* do exist then it makes the checked value of obj.data true.
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
 * Place "n" into the array. "i" will tell you where to place it
 * "n" will only go into the array if the index given is already a location in the array.
 * Don't need to return anything as the array is modified directly.
*/

function arraySet(arr, i, n){
  
}