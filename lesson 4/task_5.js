let arr1 = [4, 8, 25, 4, 78, 96, 58, 25, 41, 8, 78, 63, 57, 85, 96, 41, 4, 78, 63, 36, 54];
let son = 4;
let sonn = 25;
for (let i in arr1){
    if ((arr1[i] === son) || (arr1[i] === sonn)){
        arr1.splice(i, 1);
    }
}
console.log(arr1);