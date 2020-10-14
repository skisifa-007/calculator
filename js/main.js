$(function() {
    $("#enter").attr('disabled','disabled');

    // calculate here.
    $("#eq").on("click",function(){
        let input = $("#enter");
        let value = input.val();
        let result = eval(value);
        input.val(result);
    });

    $("button").on("click",function(){
        let btn = $(this).text();
        let input = $("#enter");
        let value = input.val();
        if(btn != "C" && btn != "" && btn != "="){
            display(btn);

        }
        else if(btn == "C"){
            clearInput();

        }
        else if(btn == ""){
            removeLastChar();
        }
    });

    function display(btn){
        let input = $("#enter");
        let value = input.val();
        if(!stophack(btn)) input.val(value+btn);
    }

    function stophack(btn){
        let value = $("#enter").val();
        let isHack = false;
        let listChars = ["/","*","-","+","%","."];
        if(value == "" && btn == "*"){ // this stop x to display;
            isHack = true;
        }
        else if(value == "" && btn == "/"){ // this stop ÷ to display;
            isHack = true;
        }
        else if(value == "" && btn == "%"){ // this stop % to display;
            isHack = true;
        }
        else if(value == "" && btn == "."){ // this stop % to display;
            isHack = true;
        }
        else if(value != "" && value[value.length - 1] == btn ){ // stop the same char.
            
            for (let index = 0; index < listChars.length; index++) {
                if(btn == listChars[index]){
                    isHack=true;
                    break;
                }
                
            }
        }
        else if(value != ""){ // stop the symbls display togother.
            for (let index = 0; index < listChars.length; index++) {
                if(value[value.length - 1] == listChars[index] ){
                    for (let i = 0; i < listChars.length; i++) {
                        if(btn == listChars[i] ){
                            isHack=true;
                            break;
                        }
                    }
                }
            }
        }
        return isHack;
    }
    
    function clearInput(){
        $("#enter").val("");
    }
    function removeLastChar(){
        let input = $("#enter");
        let value = input.val();
        value = value.slice(0,-1);
        input.val(value);



    }

});