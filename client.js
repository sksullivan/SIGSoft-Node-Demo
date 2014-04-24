$(document).ready(function() {
    $.get('http://localhost:3000/posts',function(data) {
        for (i=0;i<data.length;i++) {
            $('#posts').append($('<div></div>').html(
                "<h3>"+data[i].title+"</h3>"+
                data[i].author+"<br>"+
                data[i].body+"<br><br>"
            ));
        }
    });
    $('#post').click(function() {
    $.post('http://localhost:3000/submit',{
                                            title: $('#title').val(),
                                            author: $('#title').val(),
                                            body: $('#body').val()
                                        });
        window.location = "http://localhost:3000";
    });
});


