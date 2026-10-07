const arr = [1, 2, 3, 2, 4, 3, 5];

const duplicates = arr.filter(
    (num, index) => arr.indexOf(num) !== index
);

console.log([...new Set(duplicates)]);

// JAVA Solution

// const arr = [1, 2, 3, 2, 4, 3, 5];

// const seen = new Set();
// const duplicates = new Set();

// for (let num of arr) {
//     if (seen.has(num)) {
//         duplicates.add(num);
//     } else {
//         seen.add(num);
//     }
// }

// console.log([...duplicates]);