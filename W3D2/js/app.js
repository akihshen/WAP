$(function(){

    "use strict";

    let growthTimer = null;
    let opacityTimer = null;

    $('#btn-start').click(showCircle);

    function showCircle(){
        let circle;
        let circles = [];
        let color, red, green, blue;
        let width=$('#width').val();
        let numCircles = parseInt($('#number-circles').val());
        $('.circle').show().css({"height": width, "width": width, "top": "200px", "left": "50%"});

        for(let i = 0; i < numCircles; i++){
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
            color = "rgb(" + red + "," + green + "," + blue +")";

            circle = $("<div>", {
                "class": "circle",
                "css":{
                    "background-color": color,
                }
            });

            circle.click(hide);
            circle.mouseenter(changeOpacity);
            circle.mouseleave(resetOpacity);

            circles.push(circle);
        }

        $("body").append(circles);

        growthTimer = setInterval(grow, $('#rate').val());
    }

    function grow(evt){
        let amount=parseInt($('#amount').val());

        let circle=$('.circle');

        $(circle).css({
            "width": parseInt(circle.height()) + amount + "px",
            "height": parseInt(circle.height()) + amount + "px",
            "top": parseInt(circle.css("top")) - Math.floor(0.5 * amount) + "px",
            // "left": parseInt(circle.css("left")) - Math.floor(0.5 * amount) + "px"
        });
    }

    function hide(evt){ $(this).hide();} 
    
    function changeOpacity(evt) {
        opacityTimer = setInterval((evt) => { $(this).css("opacity", parseFloat($(this).css("opacity")) - 0.05);}, 250);
    }

    function resetOpacity(evt){
        clearInterval(opacityTimer);
        $(this).css("opacity","1");
    }

    // inputWidth.change(function(){
    //     width = parseInt(inputWidth.val());
    //     circle.width = width + "px";
    //     circle.height = width + "px";
    // });

    // inputAmount.change(function(){ amount = parseInt(inputAmount.val()); });

    // inputRate.change(function(){ growthTimer = setInterval(growCircle, rate); });

    // inputNumCircles.change(function(){ numCircles = parseInt(inputNumCircles.val()); });
});