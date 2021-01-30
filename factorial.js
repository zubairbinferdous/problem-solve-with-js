
// 4 =  1*2*3*4    /// ja number ami dorbo sata thaka 1 pojonto gun fall .....

// var factorial = 1;
// for (let i = 1; i <= 4; i++) {
//     res = factorial * i;                    // show that  factorial gun hoisa .....  ai jono  res = factorial * i; 
//     console.log(i , factorial , res);
// }
// console.log("amr mon");


// 6 = 1*2*3*4*5*6


function factorial(n) {

    var factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    return factorial;

}
var result = factorial(4);
console.log(result);




// function name(num) {

//     var factorial = 1;

//     for (let i = 1; i <= num ; i++) {

//     factorial = factorial * i;
//     console.log( i , factorial );

//     }

//     return factorial;

// }




