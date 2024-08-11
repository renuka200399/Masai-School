// Initialize the Array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number
function addNumber(array, number) {
    array.push(number);
}

// Function to remove a number
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Function to sort numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b); // Returning a new array to avoid modifying the original
}

// Function to calculate the sum of numbers
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of numbers
function calculateAverage(array) {
    const sum = calculateSum(array);
    return sum / array.length;
}

// Main Program
console.log("Initial array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedArray = sortNumbers(numbers);
console.log("Sorted array:", sortedArray);

const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

const average = calculateAverage(numbers);
console.log("Average of numbers:", average);
