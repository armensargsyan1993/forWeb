/*global $ */
//$(document).ready(function () {
//    "use strict";
//    $("#after").addClass("selected");
//});

var imgHead = [
            'img/home/header__page-one.png',
            'img/home/header__page-two.jpg',
            'img/home/header__page-tree.jpg'
        ], i=1;
    function csaHead(){
 
        if(i > (imgHead.length-1)){
            $('.header').animate({'opacity':'0'},200,function(){
                i=1;
                $('.header').css({'background':'url('+imgHead[0]+')'});
            });
            $('.header').animate({'opacity':'1'},200);
        }else{
            $('.header').animate({'opacity':'0'},200,function(){
                $('.header').css({'background':'url('+imgHead[i]+')'});
                i++;
            });
            $('.header').animate({'opacity':'1'},200);
        }
         
    }
    

$('.title__arrows-right').on("click",function csaHead(){
    $(".header").animate({'opacity':'0'},200,function(){
        $(".header").css({'background':'url('+imgHead[i]+')'});
        i++;
        if(i < 0){
            i = 2;
        }else if(i == imgHead.length){
            i = 0;
        }
        $('.header').animate({'opacity':'1'},700);
    });
});

$('.title__arrows-left').on("click",function csaHead(){
     $(".header").animate({'opacity':'0'},200,function(){
        $(".header").css({'background':'url('+imgHead[i]+')'});
        i--;
        if(i < 0){
            i = 2;
        }else if(i == imgHead.length){
            i = 0;
        }
        $('.header').animate({'opacity':'1'},700);
    });
});

var intervalCsaHead = setInterval(csaHead,10000);


