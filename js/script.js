window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'AW-823828680');

function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-823828680/90DHCK6Uz30QyMHqiAM',
        'transaction_id': '',
        'event_callback': callback
    });
    return false;
}

jQuery(document).ready(function () {
    jQuery(".eTimer").eTimer({
        etType: 2,
        etDate: "17.02.2018.0.0",
        etTitleText: "",
        etTitleSize: 20,
        etShowSign: 1,
        etSep: ":",
        etFontFamily: "Trebuchet MS",
        etTextColor: "#a3a3a3",
        etPaddingTB: 15,
        etPaddingLR: 15,
        etBackground: "#333333",
        etBorderSize: 0,
        etBorderRadius: 2,
        etBorderColor: "white",
        etShadow: " 0px 0px 10px 0px #333333",
        etLastUnit: 4,
        etNumberFontFamily: "Impact",
        etNumberSize: 35,
        etNumberColor: "white",
        etNumberPaddingTB: 0,
        etNumberPaddingLR: 8,
        etNumberBackground: "#636768",
        etNumberBorderSize: 0,
        etNumberBorderRadius: 5,
        etNumberBorderColor: "white",
        etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });
    $("#buyButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#buy").offset().top
        }, 1000);
    });

});

function slide() {
    $('html, body').animate({
        scrollTop: $("#buy").offset().top
    }, 1000);
}


function sms() {
    alert("Заказ принят, мы свяжемся с вами в ближайшее время.");
}

function reviewSms() {
    alert("Спасибо за ваш отзыв. Он опубликуется после проверки модератором.");
}

function recallSms() {
    alert("Мы свяжемся с вами на протяжении 15 минут.");
}
