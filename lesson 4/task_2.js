let ar = [1, 5, 8, 2, 3, 1, 6, 3, 6];
let juft = 0;
let toq = 0;
for (let i of ar){
    if (i % 2 === 0){
        juft += 1;
    }
    else {
        toq += 1
    }
}
console.log("juft sonlar " + juft + " ta")
console.log("toq sonlar " + toq + " ta")