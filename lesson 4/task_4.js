let unli = ["a", "e", "i", "o'", "u", "o", "A", "E", "I", "O'", "U", "O'"];
let satr = "Salom Dunyo'"
let unliSum = 0;
const strArr = satr.split('')
console.log("ixtiyoriy so'z: " + satr)
for (let i of unli) {
    for (let j of strArr){
        if (i === j) {
            unliSum += 1;
            console.log("unli harf: " + j)
        }
    }
}
console.log("unli harflarning umumiy soni; " + unliSum);