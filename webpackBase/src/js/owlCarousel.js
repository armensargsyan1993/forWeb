
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
let back = `


`
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    navText:[`<i class="demo-icon icon-left-open">&#xe806;</i>`,`<i class="demo-icon icon-right-open">&#xe800;</i>`],
    dots:false
    
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});