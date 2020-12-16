let a = Math.floor(Math.random() * 16);
if (a%3 === 0 && a%5 === 0){
    console.log("a soni 3 ga ham 5 ga ham bo'linadi");
}
else if(a%3 === 0){
    console.log("a soni 3 ga bo'linadi");
}
else if(a%5 === 0){
    console.log("a soni 5 ga bo'linadi");
}
else{
    console.log("a soni 3 ga ham 5 ga ham bo'linmaydi");
}