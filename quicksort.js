const swap = require('./swap');

const quickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
  console.log('');
  if (leftBound < rightBound) {
    console.log(
      `Calling partition on ${array} with leftBound ${leftBound} and rightBound ${rightBound}`
    );
    const pivotIndex = partition(array, leftBound, rightBound);
    console.log(`Returning pivotIndex = ${pivotIndex}`);
    console.log(`Calling quicksort for left partition with leftBound ${leftBound} and (pivotIndex - 1) ${pivotIndex - 1}`);
    quickSort(array, leftBound, pivotIndex - 1);
    console.log(`Calling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`);
    quickSort(array, pivotIndex, rightBound);
  }
  return array;
};

const partition = (array, leftIndex, rightIndex) => {
    console.log('');
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    console.log(`Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`);
    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
            console.log(`${array[leftIndex - 1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`);
        }
        while (array[rightIndex] > pivot) {
            rightIndex--;
            console.log(`${array[rightIndex + 1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`);
        }
        if (leftIndex <= rightIndex) {
            const string = `${leftIndex} <= ${rightIndex}`;
            swap(array, leftIndex, rightIndex);
            console.log(`${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}, ${array}`);
            leftIndex++;
            rightIndex--;
            console.log(`Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`);
        }
    }
    return leftIndex;
};

const sortedArray = quickSort([3, 9, 11, 89, 0, 2]);
console.log(sortedArray);
