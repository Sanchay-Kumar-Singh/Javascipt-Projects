const arr=[1,2,3,5];
let n=arr.length+1;
let totalsum=n*(n+1)/2;

let actual=0;
for(const num of arr){
    actual+=num;
}
console.log(totalsum-actual);


// JAva solution

// public class Main {
//     public static void main(String[] args) {

//         int[] arr = {1, 2, 4, 5, 6};

//         int n = arr.length + 1;

//         int total = n * (n + 1) / 2;

//         int sum = 0;

//         for (int i = 0; i < arr.length; i++) {
//             sum = sum + arr[i];
//         }

//         int missing = total - sum;

//         System.out.println("Missing number: " + missing);
//     }
// }