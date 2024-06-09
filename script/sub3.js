// 서브메뉴
$(function () {
    $('.nav>li').mouseenter(function () {
        $('.sub').stop().slideDown();
        // 헤더백그라운드 배경
        $('header').stop().animate({
            height: "200px"
        });
    });
    $('.nav>li').mouseleave(function () {
        $('.sub').stop().slideUp();
        // 헤더백그라운드 배경
        $('header').stop().animate({
            height: "60.5px"
        });
    });
});

// 검색창
$(function () {
    $('.search img').click(function () {
        $('.searchbar').toggleClass("on");
    });
});

// 페이드 슬라이드
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,//슬라이드 무한반복
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 추가할인 슬라이드
$(function () {
    var swiper = new Swiper('.slide ', {

        speed: 1000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slidebox .swiper-button-next',
            prevEl: '.slidebox .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});
// aos
AOS.init(3000);