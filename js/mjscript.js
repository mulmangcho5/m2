
// 햄버거 메뉴
function openNav(){
    $("#mySidenav").addClass("showLeftMenu");
}

function closeNav(){
    $("#mySidenav").removeClass("showLeftMenu")
}




// 메인 상단 1번 스와이퍼
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




    //2번 -바닐라자바스크립트




    // 3번째 스와이퍼 5개짜리
    const swiper3 = new Swiper('.swiper-container5',{

        direction: 'horizontal',
        slidesPerView: 5,       //1번이랑 다름
        spaceBetewwn: 30,
        debugger: true,
        loop: true,
        centeredSlides: true,

        autoplay : {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            //이전페이지
            prevEl: '.swiper-button-prev',
            //다음페이지
            nextEl: '.swiper-button-next'
        }
    });

});