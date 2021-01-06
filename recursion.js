const sumFunc = (inputArr) => {
  // base case
  if (inputArr.length === 1) {
    return inputArr[0];
  }

  // recursive case
  return inputArr[0] + sumFunc(inputArr.slice(1));
};

console.log(sumFunc([2, 3, 8, 9, 29]));

const iterativeFactorialFor = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

const iterativeFactorialWhile = (n) => {
  let factorial = 1;
  while (n > 0) {
    factorial = factorial * n;
    n--;
  }
  return factorial;
};

const recursiveFactorial = (n) => {
    // base case
  if (n === 1 || n === 0) {
    return 1;
  }

  // recursive case
  return n * recursiveFactorial(n - 1);
};

console.log(iterativeFactorialFor(4));
console.log(iterativeFactorialWhile(4));
console.log(recursiveFactorial(4));
