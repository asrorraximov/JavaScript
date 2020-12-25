function son(a, ...par) {
    let topildi = false
    for (let i = 0; i <= par.length; i++){
        if (a === par[i]){
            console.log("ichida");
            topildi = true
        }
    }
    if (!topildi){
        console.log("ichida emas")
    }
}
son(20, 1, 2, 5, 8, 9, 41, 52);