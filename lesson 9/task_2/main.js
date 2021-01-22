$(document).ready(function(){
    let son1 = '';
    let son2 = '';
    let amal;
    $(".number").click(function(){
        son2 += $(this).html();
        $("input").val(son2);
    })
    $(".amal").click(function(){
        amal = $(this).val();
        son1 = son2
        son2 = '';
        $("input").val('');
    })
    $(".result").click(function(){ 
        if (amal == "+"){
            $("input").val(parseInt(son1) + parseInt(son2));
        }
        if (amal == "-"){
            $("input").val(parseInt(son1) - parseInt(son2));
        }
        if (amal == "*"){
            $("input").val(parseInt(son1) * parseInt(son2));
        }
        if (amal == "/"){
            $("input").val(parseInt(son1) / parseInt(son2));
        }
    })
    $("#clear").click(function(){
        son2 = '';
        $("#input").val('');
    })
})