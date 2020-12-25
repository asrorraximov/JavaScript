let arr = ["olma", "davlat", "xalq", "dasturchi", "dasturlash", "google", "boolean"];
function check(str){
    let topildi = false;
    for (let i of arr){
        if (i === str){
            console.log(i + " - bu so'z arrayni ichida!");
            topildi = true;
        }
    }
    if (!topildi){
        console.log(str + " so'zi arraydan topilmadi!");
    }
}
check("asror");