window.onload = function() {
    "use strict";

    const txtArea = document.getElementById("text-area");
    const btnStart = document.getElementById("start");
    const btnStop = document.getElementById("stop");
    const selFontSize = document.getElementById("fontsize");
    const selAnimation = document.getElementById("animation");
    const chkTurbo = document.getElementById("turbo");

    let speed = 250;
    let timer = null;
    let frames;

    selFontSize.onchange = function(){
        txtArea.style.fontSize = selFontSize.value;
    };

    btnStart.onclick = function(){
        btnStart.disabled = true;
        btnStop.disabled = false;
        selAnimation.disabled = true;

        frames = ANIMATIONS[selAnimation.value].split("=====\n");
        timer = setInterval(ticker, speed);
    };

    function ticker() {
        const frame = frames.shift();
        txtArea.value = frame;
        frames.push(frame);
    }

    btnStop.onclick = function(){
        clearInterval(timer);
        btnStop.disabled = true;
        btnStart.disabled = false;
        selAnimation.disabled = false;
        txtArea.value = ANIMATIONS[selAnimation.value];
    };

    selAnimation.onchange = function(){
        txtArea.value = ANIMATIONS[selAnimation.value];
    };

    chkTurbo.onchange = function(){
        if(chkTurbo.checked){
            speed = 50;
        }
        else{
            speed = 250;
        }

        if (!stopButton.disabled) {
            clearInterval(timer);
            timer = setInterval(ticker, speed);
        }
    };
}