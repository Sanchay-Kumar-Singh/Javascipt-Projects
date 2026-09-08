const str="Sanchay Singh";

const reverse = str.split(" ").map((str)=>str.split("").reverse().join("")).join(" ");

console.log(reverse);

// Java Solutions 

// class Main {
//     public static void main(String[] args) {

//         String str = "Sanchay Singh";

//         String[] words = str.split(" ");
//         StringBuilder result = new StringBuilder();

//         for (String word : words) {
//             StringBuilder reversedWord = new StringBuilder(word);
//             result.append(reversedWord.reverse()).append(" ");
//         }

//         System.out.println(result.toString().trim());
//     }
// }