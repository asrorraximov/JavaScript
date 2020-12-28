function messageLength(){
    let sum = 0;
    let mess = document.getElementById("message").value;
    let arr = mess.split("")
    for(let i of arr){
        if(i !== " "){
            sum += 1;
        }
        else{
            continue;
        }
    }
    
    document.getElementById("len").innerHTML = sum;
    
}