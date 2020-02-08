let range = [];

// creates a range starting from 2 untill endNum
function makeRange(endNum) {
  for (let i = 2; i <= endNum; i++) {
    range.push(i);
  }
console.log('Range: ',range);
}


// get prime numbers from the range made earlier
function getPrimes() {
  let primes = [];

    while (range.length > 0) {
        // take first element from range and put it to nextPrime varable
        let nextPrime = range.shift();
        console.log('Next prime: ', nextPrime);   
        
        // adds next prime to primes array
        primes.push(nextPrime);
        console.log('Primes: ',primes);

        // checks the range array to check if a number is devisibile by any other prime number
        // num is the name of each element in range
        range = range.filter(function (num) {
            return num % nextPrime !== 0;
        });

        console.log('Range: ',range);
    }
    console.log('Primes 2: ',primes);
}

makeRange(100);
getPrimes();