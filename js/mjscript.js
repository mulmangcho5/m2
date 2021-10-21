
// 햄버거 메뉴
function openNav(){
    $("#mySidenav").addClass("showLeftMenu");
}

function closeNav(){
    $("#mySidenav").removeClass("showLeftMenu")
}




// 스와이퍼
$(document).ready(function(){
    const swiper = new Swiper('.swiper-container',{

        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetewwn: 30,
        debugger: true,
        loop: true,
        centeredSlides: true,

        autoplay : {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});