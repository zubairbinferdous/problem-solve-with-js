
function resultFactorial(n) {
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}

var result = resultFactorial(4);
console.log(result);



