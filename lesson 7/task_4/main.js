function check(){
    let och = 0;
    let berk = 0;
    let text = document.getElementById("input").value;
    let arr = text.split("")
    for (let i of arr){
        if(i === "("){
            och += 1;
        }
        if (i === ")"){
            berk += 1;
        }
    }
    if(och > berk){
        document.getElementById("p").innerText = "ochilgan qavslar ko'p: " + och;
    }
    else if(och < berk){
        document.getElementById("p").innerText = " yopilgan qavslar ko'p: " + berk;
    }
    else{
        document.getElementById("p").innerText ="ochilgan qavslar soni " + och + " ta va berkilgan qavslar soni " + berk +" ta. Qovuslar soni teng";
    }

}