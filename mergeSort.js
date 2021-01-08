const mergeSort = (startArray) => {
  console.log(' ');
  console.log(`Calling mergeSort on array=${startArray}`);
  const length = startArray.length;
  console.log(`length of the array=${length}`);
  if (length === 1) {
    console.log(startArray);
    return startArray;
  }
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  console.log(`Left array=${leftArray}`);
  const rightArray = startArray.slice(mid, length);
  console.log(`Right array=${rightArray}`);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  console.log(' ');
  console.log(
    `Calling merge on leftArray=${leftArray} and rightArray=${rightArray}`
  );
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  console.log(`Sorted array=${sortedArray}`);
  console.log(
    `Concatenated sorted array=${sortedArray
      .concat(leftArray)
      .concat(rightArray)}`
  );
  return sortedArray.concat(leftArray).concat(rightArray);
};

const inputArr = [3, 5, 2, 90, 4, 7];
const sortedArray = mergeSort(inputArr);
console.log(sortedArray);
