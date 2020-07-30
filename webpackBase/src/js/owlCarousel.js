
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
let back = `


`
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    navText:[`<i class="demo-icon icon-left-open">&#xe809;</i>`,`<i class="demo-icon icon-right-open">&#xe80a;</i>`],
    dots:false
    
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});