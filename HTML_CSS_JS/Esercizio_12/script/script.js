'use strict'

function doubleElements (array) {
  array.forEach(num => {
    if(!Number.isFinite(num)) {
      throw new Error ("l'array contiene valori diversi da numeri")
    }
    
  })

  let doubleArray = [];
  for (let num of array) {
    doubleArray.push(num*2);
  }
  return doubleArray;
}

let numbers = [2, 3, 4, 5, 6, 30, 11];

console.log(numbers);
console.log(doubleElements(numbers));