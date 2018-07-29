//The following functions are just to make the image upload work.

$(document).ready( function() {

    $("#modal-body--local-input").change(function(){
        readURL(this, $('#modal-body-uploaded--local-image'));
    });

    $("#modal-body--web-input").change(function(){
        readURL(this, $('#modal-body-uploaded--web-image'));
    });

});

function readURL(input, img) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            img.css('display', 'block');
            img.attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}