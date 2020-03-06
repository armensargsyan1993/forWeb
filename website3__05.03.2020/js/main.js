// $('.navbar-toggler-icon').css('display','none')


 $(document).ready(function(){  


    $.ajax({  
        url: "../otherPages/allProject.html",  
        cache: false,  
        success: function(html){  
            $("#contentToOtherHtml").html(html);  
        }  
    });

    $('.link0').click(function(){  
        $.ajax({  
            url: "../otherPages/allProject.html",  
            cache: false,  
            success: function(html){  
                $("#contentToOtherHtml").html(html);  
            }  
        });  
    }); 

    $('.link1').click(function(){  
        $.ajax({  
            url: "../otherPages/photography.html",  
            cache: false,  
            success: function(html){  
                $("#contentToOtherHtml").html(html);
            }  
        });  
    });  
      
    $('.link2').click(function(){  
        $.ajax({  
            url: "../otherPages/webDesign.html",  
            cache: false,  
            success: function(html){  
                $("#contentToOtherHtml").html(html);  
            }  
        });
    });  

    $('.link3').click(function(){  
        $.ajax({  
            url: "../otherPages/branding.html",  
            cache: false,  
            success: function(html){  
                $("#contentToOtherHtml").html(html);  
            }  
        });  
    });  

    $('.link4').click(function(){  
        $.ajax({  
            url: "../otherPages/mobileApp.html",  
            cache: false,  
            success: function(html){  
                $("#contentToOtherHtml").html(html);  
            }  
        });  
    });  
  
      

    $('.nav-link').click(function(e){
        e.preventDefault();
        $(".nav-link").removeClass('activated');
        $(this).addClass('activated')
    })
    

    $('.a').click(function(e){
        $('.modern3').removeClass('active')
        $('.modern2').removeClass('active')
        $('.modern').addClass('active')
        
    })
    
    $('.b').click(function(e){
        $('.modern').removeClass('active')
        $('.modern3').removeClass('active')
        $('.modern2').addClass('active')
    })
    
    $('.c').click(function(e){
        e.preventDefault();
        $('.modern').removeClass('active')
        $('.modern2').removeClass('active')
        $('.modern3').addClass('active')
    })


    document.querySelector('.map__btn').addEventListener('click', function(){
        var scrolled = window.pageYOffset + 1;
        scrollTop(scrolled,1);
    });
    
    function scrollTop(endPos,i){
        if(i == -20){
            return
        }
        setTimeout(function(){
            if(parseInt(endPos) > 0) {
                var y = parseInt(endPos) - 5 * parseInt(i);
                window.scroll(0, y); 
                scrollTop(y,parseInt(i)-1);
            }
        },10);
    
    }

})