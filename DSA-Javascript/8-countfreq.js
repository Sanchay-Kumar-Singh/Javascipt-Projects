let str = "hello";
let frequency = {};

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);

//JAVA Solutions

// class Main {
//     public static void main(String[] args) {
//         String str = "Sanchay".toLowerCase();

//         long vowels = str.chars()
//                 .filter(ch -> "aeiou".indexOf(ch) != -1)
//                 .count();

//         long consonants = str.chars()
//                 .filter(ch -> ch >= 'a' && ch <= 'z')
//                 .filter(ch -> "aeiou".indexOf(ch) == -1)
//                 .count();

//         System.out.println("Vowels: " + vowels);
//         System.out.println("Consonants: " + consonants);
//     }
// }