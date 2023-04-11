;$(function(){
        $.get('views/footer.html', function (v) {
            $('#footer').html(v);
            String.prototype.rot14 = function(){return this.replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 14) ? c : c - 26);});};
            $.ajax({type:"GET",url: "author.txt"}).done(function(msg){var vars = msg.split("\n");if(vars && vars.length){
                //email
                $('#em span').text(vars[1].rot14());$('#em').show();
                //phone
                $('#ph span').text(vars[2]);$('#ph').show();
                //cv website
                $('#cv').wrap('<a href="'+vars[3].rot14()+'" target="_blank"></a>').show();
                //username on linkedin
                $('#linkedin').attr('href', 'http://linkedin.com/in/' + vars[4].rot14());
                //name
                $('.name_').text(vars[0].rot14());
            }});
        });
});