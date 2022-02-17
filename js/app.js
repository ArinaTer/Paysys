
// tabs
$(".tab-slider--body").hide();
$(".tab-slider--body:first").show();
$(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();

    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }

    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});

$(document).ready(function () {
    $('.dropdown__link').click(function () {
        $('.dropdown').toggleClass('visible');
    });
});

// $(document).ready(function () {
//     $(".title").lettering();
//     $(".button").lettering();
// });


gsap.timeline({
    scrollTrigger: {
        trigger: ".animation__title",
        start: "center bottom",
        end: "center top",
        repeat: 1
    }
}).from(".letter-one", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

}).from(".letter-two", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

}).from(".letter-three", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

}).from(".letter-four", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

}).from(".letter-five", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

}).from(".letter-six", {
    ease: "back.out(1.7)",
    duration: .8,
    y: -1000,
    repeatDelay: -6,

})

gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "center center",
        end: "center center",
    }
}).to("#scroll-opacity", {
    opacity: 1,
    duration: 1.5
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".card__form",
        start: "bottom bottom",
        end: "bottom bottom ",
    }
}).from('.card__form', {
    duration: 2,
    scale: .2,
    opacity: -1,
    stagger: {
        each: 3.5,
        from: 'center',
        grid: 'auto',
        axis: 'y'
    }
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".popular__img-1",
        start: "center bottom",
        end: "center top",
    }
}).from('#img__item-1', {
    duration: 2.5,
    x: innerWidth * -1,
    rotation: 360
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".popular__img-2,.popular__img-3", 
        start: "center bottom",
        end: "center top",
    }
}).from('#img__item-2', {
    duration: 2.5,
    x: innerWidth * 1,
    rotation: 360,
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".section__download",
        start: "center center",
        end: "center center",
    }
}).to(".section__download", {
    opacity: 1,
    duration: 1.5
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".footer__content", 
        start: "center bottom",
        end: "center top",
    }
}).from('.footer__content', {
    duration: 2.5,
    y: 10,
    opacity: -1
})
