$(document).ready(() => {
    let src = ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg', '../image/4.jpg', '../image/5.jpg', '../image/6.jpg', '../image/7.jpg', '../image/8.jpg', '../image/9.jpg', '../image/10.jpg', '../image/11.jpg', '../image/12.jpg'];
    let rasmlar = '';
    $("#yuklash").click(() => {
        for (let i of src){
            rasmlar += `<div class="col-md-4 mt-2 p-0">
                            <div class="card mx-1">
                                <img class="card-img" style="height: 119.95px" src="${i}">
                            </div>
                        </div>`;
        }
        $("#rasmlar").html(rasmlar)
    })
})

