//Here is the function for rotating number

function rotateLeft(arr, n) {
    for (let i = 0; i < n; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}

//Example Array


// run this piece of code to get expected output
console.log(rotateLeft([1, 2, 3, 4, 5], 2));
console.log(rotateLeft([5, 6, 7, 8, 9], 2));

//Expaination:

// Basically this function receved two parameters
// 1. An array of integer number
// 2. Number of array index that needs to be shifted from first to last
// 3. In above example first 2 indexed number of this array was replace from their original index number

//We can achive same result from this code also:

function rotateLeft(arr, n) {
    for (let i = 0; i < n; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

//example

console.log(rotateLeft([1, 2, 3, 4, 5], 4));
console.log(rotateLeft([5, 6, 7, 8, 9], 2));
console.log(rotateLeft([1, 2, 3, 4, 5], 4 ));

// in above example will use unshift() and pop() rather than  shift() and push().
// both will generate the same result.