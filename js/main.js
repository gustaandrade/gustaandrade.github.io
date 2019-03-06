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

$("#name").click(function () {
    $(".information-area").children().hide();
    $(".name").fadeIn();
});

$("#career").click(function () {
    $(".information-area").children().hide();
    $(".career").fadeIn();
});