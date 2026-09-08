const arr=[1,2,3,4,5];

const largest=Math.max(...arr);
console.log(largest);

const arr = [10, 5, 20, 8];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);

// Java Solution

// public class Main {
//     public static void main(String[] args) {

//         int[] arr = {10, 25, 15, 40, 8};

//         int largest = arr[0];

//         for (int i = 1; i < arr.length; i++) {
//             if (arr[i] > largest) {
//                 largest = arr[i];
//             }
//         }

//         System.out.println("Largest number: " + largest);
//     }
// }
