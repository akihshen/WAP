window.onload = function() {    
    let txtArea = document.getElementById("textarea");
    let btnDecorate = document.getElementById("decorate");
    let chkBox = document.getElementById("bling");
    let btnIgpay = document.getElementById("igpay");
    let btnMalkovitch = document.getElementById("malkovitch");
    let timer = null;

    btnDecorate.onclick = function(){
        timer = setInterval(changeFontSize, 500);
    };

    function changeFontSize(){
        let style = window.getComputedStyle(txtArea);
        let fontSize = style.getPropertyValue('font-size');

        if(parseInt(fontSize) <= 24){
            //update the font periodically 
            let fontBigger = parseInt(fontSize) + 2;
            txtArea.style.fontSize = fontBigger + "px";
        }
    }
    
    chkBox.addEventListener('change', function(){
            if (chkBox.checked) {
                changeFontColor(true);                
            }else{
                changeFontColor(false)
            }
        }
    );

    function changeFontColor(change){
        if(change){
            txtArea.style.color = "green";
            txtArea.style.fontWeight = "bold";
            txtArea.style.textDecoration = "underline";
            // document.body.style.backgroundColor = "coral";
            document.body.style.backgroundImage = "url('images/hundred-dollar-bill.jpg')";

        }else{
            txtArea.style.color = "black";
            txtArea.style.fontWeight = "";
            txtArea.style.textDecoration = "";
            // document.body.style.backgroundColor = "";
            document.body.style.backroundImage = "";
        }    
    }

    btnIgpay.onclick = function(){
        let txt = txtArea.value.split(" ");
        
        for(let i = 0; i < txt.length; i++){
            let word = (txt[i]).split("");
            
            for(let j=0; j < word.length; j++){
                if(!isVowel(word[0])){
                    word.push(word.shift());
                } else{
                    break;
                }
            }

            word.push("a");
            word.push("y");

            txt[i] = charArrayToString(word, "");
        }

        txtArea.value = charArrayToString(txt, " ");
    }

    function isVowel(char){
        char = char.toLowerCase();

        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            return true;
        } else{
            return false;
        }
    }

    btnMalkovitch.onclick = function(){
        let txt = txtArea.value.split(" ");

        for(let i = 0; i < txt.length; i++){
            if((txt[i]).length >= 5){
                txt[i] = "Markovitch";
            }
        }

        txtArea.value = charArrayToString(txt, " ");
    };

    // Converts character or string array to a word or a phrase
    function charArrayToString(list, separator){
        let result = "";

        for(let i =0; i < list.length; i++){
            result += list[i] + separator;
        }

        if(separator === " "){
            result = result.substring(0, result.length - 1);
        }

        return result;
    }
}