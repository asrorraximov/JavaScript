function foo(){
    let type = document.getElementById("input").getAttribute("type");
    if (type === "password"){
        document.getElementById("input").setAttribute("type", "text");
    }
    else{
        document.getElementById("input").setAttribute("type", "password");
    }
}