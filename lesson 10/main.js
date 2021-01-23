$(document).ready(function(){

    function malumot(responseArray){
        let son = parseInt($("#malumotlar-soni").html())+1;
        let checkId = 0;
        let list = $("#todo-list");
        responseArray.forEach(function(titleKey){
            let completed = titleKey.completed;
            let li = $('<li class="border p-2 d-flex align-items-center mb-2">' +
                            '<div><input class="form-check-input mx-2 check" type="checkbox" id="check-' + checkId + '"></div>' +
                            '<label for="check-' + checkId + '" class="m-0 w-100">' + titleKey.title + ' ' + completed + '</label>' +
                        '</li>');
            list.append(li);

            if(completed === true){
                $(`#check-${checkId}`).attr("checked", "checked");
            }
            else{
                $(`#check-${checkId}`).removeAttr("checked");
            }  
            
            checkId++;

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