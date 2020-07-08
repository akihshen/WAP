$(function(){

    timer = null;
    let currentWidth;

    let circle = $("#circle")[0];
    let btn = $("#btn-start")[0];
    let inputWidth = $("[name='width']")[0];
    let inputAmount = $("[name='amount']")[0];
    let inputRate = $("[name='rate']")[0];
    let inputNumCircles = $("[name='number-circles']")[0];
    let displayArea = $(".display-area")[0];

    let width = parseInt(inputWidth.value);
    let amount = parseInt(inputAmount.value);
    let rate = inputRate.value;
    let numCircles = inputNumCircles.value;
    let displayHeight = displayArea.style.height;
    let displayWidth = displayArea.style.width;

    circle.style.width = width + "px";
    circle.style.height = width + "px";
    console.log("Circle: " + circle.style.width);
    
    btn.onclick = function(){
        timer = setInterval(growCircle, 1000);
    };

    circle.onclick = function hide(evt){
        clearInterval(timer);
        $(this).css("visibility", "hidden");
    };

    inputWidth.onchange = function(){
        width = parseInt(inputWidth.value);
        circle.style.width = width + "px";
        circle.style.height = width + "px";
    }

    inputAmount.onchange = function(){
        amount = parseInt(inputAmount.value);
    }

    inputRate.onchange = function(){
        rate = inputRate.value;
        timer = setInterval(growCircle, 1000);
    }

    inputNumCircles.onchange = function(){
        numCircles = inputNumCircles.value;
    }

    function growCircle(){  
        console.log("Circle Top: " + circle.style.top + " -------");
        console.log("Circle LeftOffset: " + circle.offsetLeft + " -------");
        console.log("Did Widtg: " + displayWidth + " -------");
        currentWidth = circle.offsetWidth  + amount;
        circle.style.width = currentWidth + "px";
        circle.style.height = currentWidth + "px";
        circle.style.top = Math.floor((displayHeight - currentWidth) / 2) + "px";
        circle.style.left = Math.floor((displayWidth - currentWidth) / 2) + "px";
    }
});