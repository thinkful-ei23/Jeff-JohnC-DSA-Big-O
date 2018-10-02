// Even or Odd

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// O(1) constant; the function runs only once regardless of the size of the data set

// Are You Here?

function areYouHere(arr1, arr2) {
    let ticks = 0, result = false;
    for (let i=0; i<arr1.length; i++) {
        ticks++;
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            ticks++;
            const el2 = arr2[j];
            if (el1 === el2) return result = true;
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}
console.log(areYouHere([4,5,6], [2,5,8]));

// function getRunTimeOperations(fn, input) {
//     const {ticks, result} = fn(input);
//     console.log(
//         `With input of size ${input.length}, ${fn.name} ` +
//         `clocked ${ticks} ticks to generate result of ${result}.`);
// }
//  getRuntimeOperations(areYouHere, [4,5,6] [2,5,8]);

// O(n^2); nested for loops increase complexity due to for loop running for each loop of the initial loop.

// Doubler

function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) linear; Number of operations is proportional to the size of the data set.

// Naive Search

function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) linear; the for loop is directly proportional to the array, and the if statement will only run once. Overarching runtime is linear because that is worst case scenario (best case is constant).

// Creating Pairs

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

createPairs([1, 2, 3, 4]);

// O(log(n)) Logarithmic; As the data set increases in size the number of operations increases at an increasingly slower rate.

// Computing Fibonaccis

function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) { // O(n) linear

        // we're adding the first item
        // to the result list, append the
        // number 0 to results
        if (i === 1) { // O(1) constant; will only run once
            result.push(0);
        }
        // ...and if it's the second item
        // append 1
        else if (i == 2) { // O(1) constant; will only run once
            result.push(1);
        }

        // otherwise, sum the two previous result items, and append that value to results.
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    // once the for loop finishes
    // we return `result`.
    return result;
}

// Overall O(n) linear; number operations will be directly proportional to the data set (dictated by the for loop, which is linear).

// An Efficient Search

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(log(n)) logarithmic; Halves the array, which reduces the number of operations through every iteration

// Random Element

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) constant; runs the same number of operations regardless of the size of the data set

// Is it prime?

function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) { // O(1) constant
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) { // O(n) linear
        if (n % i == 0) return false;
    }
    return true;
}

// Overall O(n) linear; number of operations is proportional to the input number as the for loop gets larger



