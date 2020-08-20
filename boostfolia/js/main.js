// $('.navbar-toggler-icon').css('display','none')
class Content{
    constructor(url){
        this.tagId = `#contentToOtherHtml`
        this.url = url
    }
}

function contentLoad(obj){
    fetch(obj.url).then(r => {
        if(r.ok){
            return r.text();
        }else{
            $(obj.tagId).html('working only in server')
        }
    }).then(html => {
        $(obj.tagId).html(html)
    });
}

 $(document).ready(function(){  
     contentLoad(new Content("../otherPages/allProject.html"))

    $('.link0').click(function(){  
        contentLoad(new Content("../otherPages/allProject.html")) 
    }); 

    $('.link1').click(function(){  
        contentLoad(new Content("../otherPages/photography.html")) 
    });  
      
    $('.link2').click(function(){
        contentLoad(new Content("../otherPages/webDesign.html"))
    });  

    $('.link3').click(function(){
        contentLoad(new Content("../otherPages/branding.html"))

    });  

    $('.link4').click(function(){  
        contentLoad(new Content("../otherPages/mobileApp.html"))
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