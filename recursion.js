const sumFunc = inputArr => {
    // base case
    if (inputArr.length === 1) {
        return inputArr[0]
    } 
    
    // recursive case
    return inputArr[0] + sumFunc(inputArr.slice(1))
}

console.log(sumFunc([2, 3, 8, 9, 29]));