$(document).ready(function() {
    
    grabPosts();

    $('#post').click(function() {
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
            $('#title').val('');
            $('#body').val('');
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
            var br = document.createElement('br');
            var br2 = document.createElement('br');

            div.appendChild(h3);
            div.appendChild(author);
            div.appendChild(br);
            div.appendChild(br2);
            div.appendChild(body);

            $('#posts').prepend(div);
        }
    });
}


