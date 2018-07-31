// Functions for image upload.

/*
 Function to read an image URL and display it on screen.
 @author Josué Cubero Sánchez.
 */
function readURL(input, img) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img.css('display', 'block');
            img.attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

/*
 Watcher for changes on inputs that will trigger an URL read.
 @author Josué Cubero Sánchez.
 */
$(document).ready(function() {
    $('#modal-body--local-input').change(function() {
        readURL(this, $('#modal-body-uploaded--local-image'));
    });
    $('#modal-body--web-input').change(function() {
        readURL(this, $('#modal-body-uploaded--web-image'));
    });
});
