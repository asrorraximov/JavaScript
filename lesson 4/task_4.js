let unli = ["a", "e", "i", "o", "u"];
let satr = "ozbekistonii"
let unliSum = 0;
const strArr = satr.split('')
for (let i of unli) {
    for (let j of strArr){
        if (i === j) {
            unliSum += 1;
        }
    }
}
console.log(unliSum);