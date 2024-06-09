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

// QnA
$(document).ready(function () {
    $(".question").click(function () {
        var $this = $(this);
        var $answer = $this.next(".answer");

        // 현재 클릭된 질문에 해당하는 답변을 슬라이드 토글
        $answer.toggle();

        // 다른 모든 질문에 해당하는 답변은 슬라이드 업
        $(".answer").not($answer).hide();

        // 클래스 토글
        $answer.toggleClass("on");
        $(".answer").not($answer).removeClass("on");
    });
});

// aos
AOS.init(3000);