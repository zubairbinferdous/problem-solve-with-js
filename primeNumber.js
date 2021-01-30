console.log('prime number');
function isPrime(n) {

    for (let i = 2; i < n; i++) {

        if (n % i == 0) {
            return 'this is not a prime number';
        }else{
            return 'your number is a prime number';
        }
        
    }

}

var result =isPrime(130);
console.log( result);