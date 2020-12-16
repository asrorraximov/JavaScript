let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
const focus = 5;
if(Math.abs(b - focus) > Math.abs(a - focus)){
    console.log(focus + " ga eng yaqin son bu a: " + a);
    console.log("b soni esa a ga qaraganda uzoqroq: " + b);
}
else if(Math.abs(a - focus) === Math.abs(b - focus)){
    console.log("a va b sonlari " + focus + " dan bir xil masofada joylashgan");
    console.log("a " + a + " ga teng" + ", " + "b esa " + b + " ga teng");
}
else{
    console.log(focus + " ga eng yaqin son bu b: " + b);
    console.log("a soni esa b ga qaraganda uzoqroq: " + a);
}