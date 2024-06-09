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

//our story 이미지 텍스트
$(function () {
    $('.d1').click(function () {
        $('.d1>a img').toggleClass('freeze');
        $('.d2>a img, .d3>a img').removeClass('freeze');
        $('.img_text p:nth-child(1)').toggleClass('on');
        $('.img_text p:nth-child(1)').siblings().removeClass('on');
    });
    $('.d2').click(function () {
        $('.d2>a img').toggleClass('freeze');
        $('.d1>a img, .d3>a img').removeClass('freeze');
        $('.img_text p:nth-child(2)').toggleClass('on');
        $('.img_text p:nth-child(2)').siblings().removeClass('on');
    });
    $('.d3').click(function () {
        $('.d3>a img').toggleClass('freeze');
        $('.d1>a img, .d2>a img').removeClass('freeze');
        $('.img_text p:nth-child(3)').toggleClass('on');
        $('.img_text p:nth-child(3)').siblings().removeClass('on');
    });
});

// 퀄리티, 트로피 슬라이드
$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 50,//갤러리 사이 간격
        speed: 12000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });
    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

// aos
AOS.init(3000);