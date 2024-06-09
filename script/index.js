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

// 베스트 상품 슬라이드
$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        effect: "coverflow",
        grabCursor: true,
        slidesPerView: 3,//보여지는 갤러리 수
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 100,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery-center .swiper-button-next',
            prevEl: '.gallery-center .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
    });
});

// aos
AOS.init(3000);
