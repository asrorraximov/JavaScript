$(document).ready(function(){

    function malumot(responseArray){
        let son = parseInt($("#malumotlar-soni").html())+1;
        var list = $("#todo-list");
        responseArray.forEach(function(titleKey){
            var li = $('<li class="border p-2 d-flex align-items-center mb-2">' +
                            '<div><input class="form-check-input mx-2" type="checkbox" id="check"></div>' +
                            '<p class="m-0">' +
                                '<label for="check">' + titleKey.title + '</label>' +
                            '</p>' +
                        '</li>');
            list.append(li);
            $("#malumotlar-soni").html(son++);
        })
    }

    $("#yuklash").click(function(){
        $("#todo-row").removeClass("d-none");
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            type: "GET",
            success: function(response){
                malumot(response);
            },
            error: function(e){
                alert(e);
            },
            timeout: 5000,
            beforeSend: function(){
                $(".spinner-border").removeClass("d-none");
            },
            complete: function(){
                $(".spinner-border").addClass("d-none")
            }
        })
    })
})