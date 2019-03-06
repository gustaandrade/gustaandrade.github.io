$(".tab2").mouseenter(function() {
    $(this).addClass("red-link");

    var div = $(".dot-area");
    div.append('<div class="red-dot"></div>');
    div.css("top", $(this).position().top + 7);
});

$(".tab2").mouseleave(function() {
    $(this).removeClass("red-link");

    var div = $(".dot-area");
    div.empty();
});

$(".tab2").click(function() {
    $(".code-area > .tab2").removeClass("yellow-link");
    $(this).addClass("yellow-link");

    var div = $(".dot-area");
    div.append('<div class="yellow-dot"></div>');
    div.css("top", $(this).position().top + 7);
});

$(".tab2").click(function() {
    var className = $(this).attr('id');

    $(".information-area").children().hide();
    $("." + className).fadeIn();
});

$(".tab2 > span").click(function() {
    var className = $(this).parent().attr('id');

    $(".information-area").children().hide();
    $("." + className).fadeIn();
});