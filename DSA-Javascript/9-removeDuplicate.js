let str = "programming";
let result = "";

for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);

// JAVA Soultions

// class Main {
//     public static void main(String[] args) {
//         String str = "programming";
//         String result = "";

//         for (char ch : str.toCharArray()) {
//             if (result.indexOf(ch) == -1) {
//                 result += ch;
//             }
//         }

//         System.out.println(result);
//     }
// }