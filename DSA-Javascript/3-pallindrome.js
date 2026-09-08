let str="madam";

let result=str.split("").reverse().join("");

console.log(str === result);

// Java Soltions 

// const str = "madam";

// let left = 0;
// let right = str.length - 1;

// let isPalindrome = true;

// while (left < right) {
//     if (str[left] !== str[right]) {
//         isPalindrome = false;
//         break;
//     }

//     left++;
//     right--;
// }

// console.log(isPalindrome);