function check(){
    let mess = document.getElementById("message").value;
    let input = document.getElementById("input").value;
    let arr  = mess.split(" ");
    for(let i of arr){
        if(i === input){
            document.getElementById("p").innerHTML = "Bu so'z matnda mavjud";
            return
        }
        else{
            document.getElementById("p").innerHTML = "Bu so'z matnda mavjud emas";
        }
    }
}