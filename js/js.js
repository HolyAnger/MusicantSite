
    setTimeout(function(){
        var name = document.getElementById('menu');
        name.style.display = 'block';
        name.style.animation = 'greet 2.3s linear';
    },700);



    $('#greet').flowtype({
        minimum : 350,
        maximum : 1920,
        minFont   : 5,
        maxFont   : 65

    });

    var x=0;
    $(".left").click(function() {
        if(x!=1){
            $(this).css('transform', 'rotate(180deg)');
            $('#info').css('left', '0');
            $('.right').css('display', 'none');
            $('#menu').css('left', '55%');
            x+=1;
        }

        else if(x==1){
            $(this).css('transform', 'rotate(0deg)');
            $('#info').css('left', '-580px');
            $('.right').css('display', 'inline-block');
            $('#menu').css('left', '50%');
            x-=1;
        }
    });

    $(".right").click(function() {
        if(x!=1){
            $(this).css('transform', 'rotate(-180deg)');
            $('#list').css('right', '0');
            $('.left').css('display', 'none');
            $('#menu').css('left', '35%');
            x+=1;
        }

        else if(x==1){
            $(this).css('transform', 'rotate(0deg)');
            $('#list').css('right', '-770px');
            $('.left').css('display', 'inline-block');
            $('#menu').css('left', '50%');
            x-=1;
        }
    });





    $('.close').click(function(){
       $('#modal').fadeOut('slow');
        $('#frame').attr('src', '' );

    });

function value(e){
   var link =  $(e).attr('video');
    $('#modal').fadeIn('slow');
    $('#frame').attr('src', link );
}

















