// const year = 320711;
// let remainder = year % 4 ;
// console.log(remainder == 0);
// if (remainder == 0) {
//     console.log('this year is a leap year');
// }else{
//     console.log('this year is not a leap year');
// }

// const result = isleapYear(1700);
// console.log(result);

function isleapYear(year) {

    // let remainder = year % 4 ;
    // if ( remainder == 0) {
    //     return true;
    // }else{
    //     return false;
    // }

    if (( 0 == year % 4) && ( 0 != year % 100) || (0 == year % 400)) {             // and $$  -- or ||

        return 'is leap year';
    }else{
        return 'is not leap year';
    }

}

const result = isleapYear(1700);     // 2004 or 1700 use this 2 year
console.log(result);
