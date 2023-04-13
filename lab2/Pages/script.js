$(document).ready(function () {
    "use strict";
    var makeTabActive = function (tabNumber) {
        var tabSelector = ".tabs span:nth-child(" + tabNumber + ")";
        var contentSelector = ".content2 .item:nth-child(" + tabNumber + ")";
        $(".tabs span").removeClass("active");
        $(".content2 .item").removeClass("active");
        $(tabSelector).addClass("active");
        $(contentSelector).addClass("active");
    };
    $(".tabs span:nth-child(1)").on("click", function () {
    makeTabActive(1);
    return false;
    });
    $(".tabs span:nth-child(2)").on("click", function () {
    makeTabActive(2);
    return false;
    });
    $(".tabs span:nth-child(3)").on("click", function () {
    makeTabActive(3);
    return false;
    });
})
        
    