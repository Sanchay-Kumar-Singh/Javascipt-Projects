let str = "Sanchay";
let vowels = 0;
let consonants = 0;

for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
        vowels++;
    } else if (char >= "a" && char <= "z") {
        consonants++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


//JAVA Solutions

// class Main {
//     public static void main(String[] args) {
//         String str = "Sanchay";
//         int vowels = 0;
//         int consonants = 0;

//         str = str.toLowerCase();

//         for (int i = 0; i < str.length(); i++) {
//             char ch = str.charAt(i);

//             if ("aeiou".indexOf(ch) != -1) {
//                 vowels++;
//             } else if (ch >= 'a' && ch <= 'z') {
//                 consonants++;
//             }
//         }

//         System.out.println("Vowels: " + vowels);
//         System.out.println("Consonants: " + consonants);
//     }
// }