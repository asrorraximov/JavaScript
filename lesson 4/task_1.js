let son = Math.floor(Math.random() * 10);
let sum = 0;
let m = 1
console.log("son = " + son)
for (let i = 0; i <= son; i++){
    if (i % 2 === 0){
        sum += i;
    }
    else {
        m *= i;
    }
}
console.log("summa: " + sum);
console.log("ko'paytma: " + m)