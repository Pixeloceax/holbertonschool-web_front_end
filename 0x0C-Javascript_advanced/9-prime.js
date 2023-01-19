function countPrimeNumbers() {
  let primeCount = 0;
  let start = new Date().getTime();
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
  let end = new Date().getTime();
  console.log(
    `Execution time of printing countPrimeNumbers was ${
      end - start
    } milliseconds.`
  );
  return primeCount;
}
console.log(countPrimeNumbers());
