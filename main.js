function main(){
    //alert('hello Javascript');
    $('.hide').hide();
    $('.bootarticle.big').hide();
    $('.bootarticle.big.text').hide();
    
    // Food Box Mouseover
    $('.box.a').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.food1').fadeToggle(400);
    });
    $('.box.f').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.food2').fadeToggle(400);
    });
    $('.box.j').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.food3').fadeToggle(400);
    });
    $('.box.m').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.food4').fadeToggle(400);
    });
    
    // Music Box Mouseover
    $('.box.b').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.music1').fadeToggle(400);
    });
    $('.box.d').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.music2').fadeToggle(400);
    });
    $('.box.g').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.music3').fadeToggle(400);
    });
    $('.box.k').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.music4').fadeToggle(400);
    });
    
    //Fashion Box Mouseover
        $('.box.c').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.fashion1').fadeToggle(400);
    });
        $('.box.h').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.fashion2').fadeToggle(400);
    });
        $('.box.n').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.fashion3').fadeToggle(400);
    });
    
    //Dance Box Mouseover
        $('.box.e').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.dance1').fadeToggle(400);
    });
        $('.box.i').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.dance2').fadeToggle(400);
    });
        $('.box.l').hover(function(){
        $(this).toggleClass('alt');
        $('.hide.dance3').fadeToggle(400);
    });
    //Article slider
        $('.anchor').on("click", function(){
        $('.bootarticle.big').fadeIn(1000);
        $('.bootarticle.big.text').fadeIn(1000);
    });
        $('.close').on("click", function(){
        $('.bootarticle.big').fadeOut(1000);
        $('.bootarticle.big.text').fadeOut(1000);
    });
    //Pop-Up Article content
        $('.anchor.a1').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a1').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(http://www.hollandandbarrett.ae/blog/wp-content/uploads/2017/02/Our-Top-5-Tips-for-a-Continued-Healthy-Lifestyle.jpg)');
            $('.headline.bigad').text($('.headline.a1').text() );
        });
        $('.anchor.a2').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a2').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/620/cached.offlinehbpl.hbpl.co.uk/news/PGH/iStock-622179362-201708151002257371-20180603110453106.jpg)');
        });
        $('.anchor.a3').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a3').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(https://asset2.cxnmarksandspencer.com/is/image/mands/44e79d5a6007d11fd420b6c302d0f2fc0ef404da?$Homepage_600x330$)');
        });
        $('.anchor.a4').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a4').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(https://www.fluentin3months.com/wp-content/uploads/2017/03/traveling-jobs.jpg)');
        });
        $('.anchor.a5').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a5').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(https://caspiannews.com/media/caspian_news/all_original_photos/1528831479_7183783_1528831390_5761793SFF-Foto-2018-001web2.jpg)');
        });
        $('.anchor.a6').on("click", function(){
        $('.bootarticle.big.text').text($('.bootarticle.text.a6').text()     );  $('.bootarticle.big.picture').css('background-image', 'url(https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/07/05/105312566-1530803740357gettyimages-815863456.1910x1000.jpeg)');
        });
};
$(document).ready(main);