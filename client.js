$(document).ready(function() {
    
    grabPosts();

    $('#post').on('click', function() {
        console.log("Submit called");
        console.log("Title: " + $('#title').val());
        console.log("author: " + $('#author').val());
        console.log("body: " + $('#body').val());
        $.post('submit',{
            title: $('#title').val(),
            author: $('#author').val(),
            body: $('#body').val()
        }, function (data){
            grabPosts();
        });
        
    });
});

function grabPosts(){
    $.get('posts',function(data) {
        console.log("Received Data: " + JSON.stringify(data));
        
        $('#posts').empty();

        for (i=0;i<data.length;i++) {
            var post = data[i];

            var h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(post.title));

            var author = document.createTextNode(post.author);
            var body = document.createTextNode(post.body);
            var div = document.createElement('div');

            div.appendChild(h3);
            div.appendChild(author);
            div.appendChild(body);

            $('#posts').prepend(div);
        }
    });
}


