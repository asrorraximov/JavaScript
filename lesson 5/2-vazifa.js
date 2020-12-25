summ = 0
function sum(n) {
    for (let i = 0; i < n+1; i++) {
        summ += i;
    }
    console.log(n, "gacha bo'lgan sonlar yig'indisi: ", summ);
}
sum(15);