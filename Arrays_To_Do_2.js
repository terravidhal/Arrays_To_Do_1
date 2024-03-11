// Push a value to the front of an array
function pushFront(arr, value) {
  const newArr = new Array(arr.length + 1); 
  newArr[0] = value;  // Assign the value to the first element
  for (let i = 1; i < newArr.length; i++) {
    newArr[i] = arr[i - 1]; // Copy elements from old array
  }
  return newArr;
}

// Remove and return the first element of an array
function popFront(arr) {
  if (arr.length === 0) return null; 
  const removedValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]; // Shift elements to the left
  }
  arr.length--; // Decrement length to reflect removed element
  return removedValue;
}

// Insert a value at a specific index in an array
function insertAt(arr, index, value) {
  if (index < 0 || index > arr.length) {
    throw new Error("Invalid index"); // Handle invalid index
  }
  const newArr = new Array(arr.length + 1);
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i]; // Copy elements before the insertion point
  }
  newArr[index] = value; // Insert the value at the desired index
  for (let i = index + 1; i < newArr.length; i++) {
    newArr[i] = arr[i - 1]; // Copy elements after the insertion point
  }
  return newArr;
}

// Example Usage
console.log(pushFront([5, 7, 2, 3], 8)); // [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // [7, 99]

const myArray = [0, 5, 10, 15];
const removedValue = popFront(myArray);
console.log(removedValue); // 0
console.log(myArray); // [5, 10, 15] (value removed)

console.log(insertAt([100, 200, 5], 2, 311)); // [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42)); // [9, 42, 33, 7]