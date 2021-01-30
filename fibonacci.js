console.log('fiboonacci')



//  0 1 1 2 3 5 8 13 21 34 55

// সিরিজ। ধন্যবাদ।
// এই সিরিজের প্রতিটি উপাদান আসবে তার আগের ২ টি উপাদান এর যোগফল থেকে। প্রথম উপাদান ০ এবং ২য় উপাদান ১ ধরা হয় এখানে। তাহলে ৩য় উপাদান হবে ০+১=১, 

// তাহলে সিরিজ টি দাড়ায় 
// ০ ১ ১ 
// এরপর ১+১ = ২
// ০ ১ ১ ২
// এরপর ১+২=৩
// ০ ১ ১ ২ ৩
// ২+৩ =৫
// ০ ১ ১ ২ ৩ ৫
// এভাবে করে করে আগাতে থাকবে ফিবোনাক্কি সিরিজ। ধন্যবাদ।



// fibo[2] = fibo[2-1] + fibo[2-2];     
// fibo[3] = fibo[3-1] + fibo[3-2];   
// fibo[4] = fibo[4-1] + fibo[4-2];    
// fibo [n]= fibo[n-1] + fibo[n-2];


//  0 1 1 2 3 5 8 13 21 34 55

    var fibo = [0, 1];

    for (var i = 2; i <= 10; i++) {

        fibo[i] = fibo[i-1] + fibo[i-2];                    // i - 1 mana array thaka akta elemant bad holo
        console.log( i , fibo[i] , fibo[i-1] , fibo[i-2]);
    }












// function fibonacci(n) {

//     var fibo = [0, 1];

//     for (var i = 3; i <= n; i++) {

//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;

// }


// var result = fibonacci(5);
// console.log(result);