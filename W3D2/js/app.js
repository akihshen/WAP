$(function(){
    "use strict";

    let growthTimer = null;
    let opacityTimer = null;
    let currentWidth;

    // Creating input control variables
    let circle = $(".circle");
    let btn = $("#btn-start");
    let inputWidth = $("[name='width']");
    let inputAmount = $("[name='amount']");
    let inputRate = $("[name='rate']");
    let inputNumCircles = $("[name='number-circles']");
    let displayArea = $(".display-area");

    // Reading initial display control parameters
    let width = parseInt(inputWidth.val());
    let amount = parseInt(inputAmount.val());
    let rate = parseInt(inputRate.val());
    let numCircles = parseInt(inputNumCircles.val());
    let displayHeight = parseInt(displayArea.height());
    let displayWidth = parseInt(displayArea.width());

    // Initializing a circle
    circle.width = width + "px";
    circle.height = width + "px";
    console.log("Circle: " + displayArea.width());

    showCircle();
    
    btn.click(function(){ growthTimer = setInterval(growCircle, rate); });

    circle.click(hide);
    circle.mouseenter(changeOpacity);
    circle.mouseleave(resetOpacity);
    
    function hide(evt){
        clearInterval(growthTimer);
        $(this).hide();
        // $(this).css("visibility", "hidden");
    }

    function changeOpacity(evt) {
        opacityTimer=setInterval((evt) => {
            let currentOpacity = parseFloat($(this).css("opacity"));
            let next = currentOpacity-0.1;
            $(this).css("opacity",next);
        },200);
    }

    function resetOpacity(evt){
        clearInterval(opacityTimer);
        $(this).css("opacity","1");
    }

    inputWidth.change(function(){
        width = amount = parseInt(inputWidth.val());
        console.log(width);
        circle.width = width + "px";
        console.log(circle.width);
        circle.height = width + "px";
    });

    inputAmount.change(function(){ amount = parseInt(inputAmount.val()); });

    inputRate.change(function(){ growthTimer = setInterval(growCircle, rate); });

    inputNumCircles.change(function(){ numCircles = parseInt(inputNumCircles.val()); });

    // function growCircle(){
    //     currentWidth = parseInt(circle.width)  + amount;
    //     circle.width = currentWidth + "px";
    //     circle.height = currentWidth + "px";
    //     // console.log("Circle width: " + circle.width);
    //     // console.log("Circle height: " + circle.height);
    //     let top = Math.floor((displayHeight - currentWidth) / 2) % displayHeight;
    //     let left = Math.floor((displayWidth - currentWidth) / 2) % displayWidth;
    //     circle.offset({ top: top, left: left });

    //     // let newDiameter=parseInt(circle.height())+growAmt+"px";
    //     // let newLeft=parseInt(circle.css("left"))-growAmt/2+"px";
    //     // let newTop=parseInt(circle.css("top"))-growAmt/2+"px";
    // }

    function growCircle(){
        let circles = $(".circle");
        let i = 0;

        $(".circle").each(function(indx, e){
            let eJ = $(e);

            currentWidth = parseInt(eJ.width)  + amount;
            eJ.width = currentWidth + "px";
            eJ.height = currentWidth + "px";
            // console.log("Circle width: " + circle.width);
            // console.log("Circle height: " + circle.height);
            let top = Math.floor(0.5 * (displayHeight + (i - 1) * currentWidth)) % displayHeight;
            let left = Math.floor(0.5 * (displayWidth + (i - 1) * currentWidth)) % displayWidth;
            eJ.offset({ top: top, left: left });
            i++;
        });

        // for(let i = 0; i < numCircles; i++){
        //     currentWidth = parseInt(circles[i].width)  + amount;
        //     circles[i].width = currentWidth + "px";
        //     circles[i].height = currentWidth + "px";
        //     // console.log("Circle width: " + circle.width);
        //     // console.log("Circle height: " + circle.height);
        //     let top = Math.floor(0.5 * (displayHeight + (i - 1) * currentWidth)) % displayHeight;
        //     let left = Math.floor(0.5 * (displayWidth + (i - 1) * currentWidth)) % displayWidth;
        //     circles[i].offset({ top: top, left: left });
        // }

        // let newDiameter=parseInt(circle.height())+growAmt+"px";
        // let newLeft=parseInt(circle.css("left"))-growAmt/2+"px";
        // let newTop=parseInt(circle.css("top"))-growAmt/2+"px";
    }

    function showCircle(){
        let circles = [circle];
        let newCircle;
        let color;
        let offset =  circle.offset();

        for(let i = 1; i < numCircles; i++){
            color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + 
                    Math.floor(Math.random() * 255) +")";
                    console.log(color);
            newCircle = $("<div>", {
                "class": "circle",
                "background-color": color
            });

            newCircle.offset({ top: offset.top + 0.5 * i *width, left: offset.left + 0.5 * i * width });

            newCircle.click(hide);
            newCircle.mouseenter(changeOpacity);
            newCircle.mouseleave(resetOpacity);

            $(".display-area").append(newCircle);
        }

        // $(".display-area").append(circles);
    }
});