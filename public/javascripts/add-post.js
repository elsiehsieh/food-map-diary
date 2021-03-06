$('#new-post-form').on('keyup keypress', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        e.preventDefault();
        return false;
    }
});
$("#tags").tagsinput({
    tagClass: 'get-tags',
    maxTags: 5,
    maxChars: 10
});
$("#new-post-form").submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        url: '/posts/new',
        headers: {"X-CSRF-TOKEN": $('#_csrf').val()},
        type: 'POST',
        data: formData,
        processData: false,
        contentType : false,
        success: function(response) {
            if(response.status == 200){
                alert(response.message);
                window.location.href = "/";
            }else{
                alert("Please try it again later!");
                window.location.href = "/";
            }
        }
    });
});