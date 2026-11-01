const arr = [10, 20, 30, 40];

const sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);



// JAVA Solutions

// import java.util.Arrays;

// class Main {
//     public static void main(String[] args) {
//         int[] arr = {10, 20, 30, 40};

//         int sum = Arrays.stream(arr).sum();

//         System.out.println(sum);
//     }
// }

// class Main {
//     public static void main(String[] args) {
//         int[] arr = {10, 20, 30, 40};

//         int sum = 0;

//         for (int num : arr) {
//             sum += num;
//         }

//         System.out.println(sum);
//     }
// }