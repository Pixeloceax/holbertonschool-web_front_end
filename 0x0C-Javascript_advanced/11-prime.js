function countPrimeNumbers() {
  let primeCount = 0;
  for (let currentNumber = 2; currentNumber <= 100; currentNumber++) {
    let isPrime = true;
    for (let divisor = 2; divisor < currentNumber; divisor++) {
      if (currentNumber % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeCount++;
    }
  }
  return primeCount;
}

let start = new Date().getTime();
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    countPrimeNumbers();
  }, 0);
}
let end = new Date().getTime();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    end - start
  } milliseconds.`
);
