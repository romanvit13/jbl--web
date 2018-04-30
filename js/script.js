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
