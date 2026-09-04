const str="Sanchay Singh";

const reverse = str.split(" ").map((str)=>str.split("").reverse().join("")).join(" ");

console.log(reverse);