
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(200).fadeOut('slow');
    $preloader.delay(650).fadeOut('slow');
});



    setTimeout(function(){
        var name = document.getElementById('menu');
        name.style.animation = 'greet 2.3s linear';
    },800);



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
            $('#menu').css({'left':'86%', 'width':'98%', 'text-align':'left'});
            x+=1;
        }

        else if(x==1){
            $(this).css('transform', 'rotate(0deg)');
            $('#info').css('left', '-770px');
            $('.right').css('display', 'inline-block');
            $('#menu').css({'left':'50%', 'text-align':'center'});
            x-=1;
        }
    });

    $(".right").click(function() {
        if(x!=1){
            $(this).css('transform', 'rotate(-180deg)');
            $('#list').css('right', '0');
            $('.left').css('display', 'none');
            $('#menu').css({'left':'14%', 'width':'98%', 'text-align':'right'});
            x+=1;
        }

        else if(x==1){
            $(this).css('transform', 'rotate(0deg)');
            $('#list').css('right', '-770px');
            $('.left').css('display', 'inline-block');
            $('#menu').css({'left':'50%', 'text-align':'center'});
            x-=1;
        }
    });


    $('.close, .overlay').click(function(){
       $('#modal, .overlay').fadeOut('slow');
        $('#frame').attr('src', '' );

    });


function value(e){
   var link =  $(e).attr('video');
    $('.overlay').fadeIn('slow');
    $('#modal').fadeIn('slow');
    $('#frame').attr('src', link + "?autoplay=1" );
}


















