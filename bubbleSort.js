const swap = require('./swap');

const bubbleSort = input => {
    let swapping = true;
    let swapCount = 0;
    while(swapping) {
        swapping = false;
        
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i+1]) {
                console.log(`Swapping ${input[i]}, ${input[i+1]} in ${input}`);
                swap(input, i, i+1);
                swapCount++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped ${swapCount} times`);
    return input;
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));