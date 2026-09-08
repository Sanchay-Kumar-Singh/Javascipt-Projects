
const arr=[1,2,3,4,5];

const secondLargest=[...arr].sort((a,b)=>b-a);
console.log(secondLargest[1]);

// const arr = [10, 5, 20, 8];

// let largest = -Infinity;
// let second = -Infinity;

// for (const num of arr) {
//     if (num > largest) {
//         second = largest;
//         largest = num;
//     } else if (num > second && num !== largest) {
//         second = num;
//     }
// }

// console.log(second);

//Java Solutions

// public class Main {
//     public static void main(String[] args) {

//         int[] arr = {10, 25, 15, 40, 8};

//         int largest = arr[0];
//         int secondLargest = arr[0];

//         for (int i = 1; i < arr.length; i++) {

//             if (arr[i] > largest) {
//                 secondLargest = largest;
//                 largest = arr[i];
//             } 
//             else if (arr[i] > secondLargest && arr[i] != largest) {
//                 secondLargest = arr[i];
//             }
//         }

//         System.out.println("Second largest number: " + secondLargest);
//     }
// }