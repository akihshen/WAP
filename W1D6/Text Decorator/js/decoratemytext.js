window.onload = function() {    
    let txtArea = document.getElementsById("textarea");
    let btn = document.getElementById("decorate");
    let chkBox = document.getElementById("bling");

    btn.onclick = function(){
        // let style = window.getComputedStyle(txtArea);
        // let fontSize = style.getPropertyValue('font-size');
        //  //update the font periodically 
        // let fontBigger = parseInt(fontSize) + 2;
        // txtArea.style.fontSize = fontBigger + "px";
        alert("tc");
        txtArea.value = "123445678909876edyhckjkhv jncoh ckjjbib xv v xvvscsgi";
    };
    
    chkBox.addEventListener('change', function(){
            if (chkBox.checked) {
                changeFontColor(true);
            }else{
                changeFontColor(false)
            }
        }
    );

    function changeFontColor(change){
        alert("Checked");
        if(change){
            txtArea.style.color = "green";

        }else{
            txtArea.style.color += "black";
        }    
    }
}

// window.onload = function() {    
//     let btn = document.getElementById("decorate");
//     btn.onclick = function(){
//         alert("Hello, world!");
//         let txtArea = document.getElementsById("txtArea1");
//         txtArea.className = "largetext";
//         txtArea.
//     };
    
//     let chkBox = document.getElementById("bling");
//     chkBox.addEventListener('change', function(){
//             if (chkBox.checked) {
//                 changeFontColor(true);
//             }else{
//                 changeFontColor(false)
//             }
//         }
//     );
// }

// function changeFontColor(change){
//     alert("Checked");
//     let txtArea = document.getElementsById("txtArea1");
//     if(change){
//         txtArea.className += " greentext";
//     }else{
//         txtArea.className += " blacktext";
//     }    
// }

