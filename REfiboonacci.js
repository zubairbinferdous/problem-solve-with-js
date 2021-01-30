console.log(' re fibo ')


function fibonaccie(n) {
    if ( n == 0) {
        return 0;
    }if (n==1) {
        return 1
    }else{
        return fibonaccie(n-1) + fibonaccie(n-2);
    }
}

var result = fibonaccie(20);
console.log(result);

