let darkmode = false;
let lightmode = true;

var change_mode = document.getElementById("title")
change_mode.addEventListener("click", changeMode)
function changeMode(){
    if(darkmode === true){
        darkmode = false;
        lightmode = true;
        barvy()


    }
    else if(lightmode === true){
        darkmode = true;
        lightmode = false;
        barvy()


    }

    
}



let numberR = 0;
let numberG = 0;
let numberB = 0;

let saturation = 0;

let text_saturation = 0;

let text_numberR = 0;
let text_numberG = 0;
let text_numberB = 0;

let color_whiteR = 0;
let color_whiteG = 0;
let color_whiteB = 0;
let color_white = 0;

let color_blackR = 0;
let color_blackG = 0;
let color_blackB = 0;
let color_black = 0;

let color_darkgreyR = 0;
let color_darkgreyG = 0;
let color_darkgreyB = 0;
let color_darkgrey = 0;

let color_lightgreyR = 0;
let color_lightgreyG = 0;
let color_lightgreyB = 0;
let color_lightgrey = 0;

let color_greyR = 0;
let color_greyG = 0;
let color_greyB = 0;
let color_grey = 0;

let color_orangeR = 0;
let color_orangeG = 0;
let color_orangeB = 0;
let color_orange = 0;

let color_darkorangeR = 0;
let color_darkorangeG = 0;
let color_darkorangeB = 0;
let color_darkorange = 0;

let color_pinkR = 0;
let color_pinkG = 0;
let color_pinkB = 0;
let color_pink = 0;






function barvy(){
if(lightmode === true){
   
    
    numberR = 0;
    numberG = 0;
    numberB = 0;


    text_numberR = 0;
    text_numberG = 0;
    text_numberB = 0;

    text_saturation = 0;

    //BARVY

    color_whiteR = 255 + numberR + saturation;
    color_whiteG = 255 + numberG + saturation;
    color_whiteB = 255 + numberB + saturation;   
    
    color_blackR = 0 + numberR + saturation;
    color_blackG = 0 + numberG + saturation;
    color_blackB = 0 + numberB + saturation;

    color_darkgreyR = 25 + numberR + saturation;
    color_darkgreyG = 25 + numberG + saturation;
    color_darkgreyB = 25 + numberB + saturation;

    color_lightgreyR = 165 + numberR + saturation;
    color_lightgreyG = 165 + numberG + saturation;
    color_lightgreyB = 165 + numberB + saturation;

    color_greyR = 83 + numberR + saturation;
    color_greyG = 83 + numberG + saturation;
    color_greyB = 83 + numberB + saturation;
        
    color_orangeR = 255 + numberR + saturation;
    color_orangeG = 100 + numberG + saturation;
    color_orangeB = 122 + numberB + saturation;

    color_darkorangeR = 255 + numberR + saturation;
    color_darkorangeG = 122 + numberG + saturation;
    color_darkorangeB = 112 + numberB + saturation;

    //TEXT

    text_color_whiteR = 255 + text_numberR + text_saturation;
    text_color_whiteG = 255 + text_numberG + text_saturation;
    text_color_whiteB = 255 + text_numberB + text_saturation;


    text_color_blackR = 0 + text_numberR + text_saturation;
    text_color_blackG = 0 + text_numberG + text_saturation;
    text_color_blackB = 0 + text_numberB + text_saturation;


    text_color_darkgreyR = 25 + text_numberR + text_saturation;
    text_color_darkgreyG = 25 + text_numberG + text_saturation;
    text_color_darkgreyB = 25 + text_numberB + text_saturation;
    

    text_color_lightgreyR = 165 + text_numberR + text_saturation;
    text_color_lightgreyG = 165 + text_numberG + text_saturation;
    text_color_lightgreyB = 165 + text_numberB + text_saturation;
    

    text_color_greyR = 83 + text_numberR + text_saturation;
    text_color_greyG = 83 + text_numberG + text_saturation;
    text_color_greyB = 83 + text_numberB + text_saturation;
    

    text_color_orangeR = 255 + text_numberR + text_saturation;
    text_color_orangeG = 100 + text_numberG + text_saturation;
    text_color_orangeB = 122 + text_numberB + text_saturation;

    text_color_darkorangeR = 255 + text_numberR + text_saturation;
    text_color_darkorangeG = 122 + text_numberG + text_saturation;
    text_color_darkorangeB = 112 + text_numberB + text_saturation;

    
    
    color_white = "rgb("+ color_whiteR +", "+ color_whiteG +", "+ color_whiteB +");";
    color_black = "rgb("+ color_blackR +", "+ color_blackG +", "+ color_blackB +");";
    color_darkgrey = "rgb("+ color_darkgreyR +", "+ color_darkgreyG +", "+ color_darkgreyB +");";
    color_lightgrey = "rgb("+ color_lightgreyR +", "+ color_lightgreyG +", "+ color_lightgreyB +");";
    color_grey = "rgb("+ color_greyR +", "+ color_greyG +", "+ color_greyB +");";
    color_orange = "rgb("+ color_orangeR +", "+ color_orangeG +", "+ color_orangeB +");";
    color_darkorange = "rgb("+ color_darkorangeR +", "+ color_darkorangeG +", "+ color_darkorangeB +");";

    text_color_white = "rgb("+ text_color_whiteR +", "+ text_color_whiteG +", "+ text_color_whiteB +");";
    text_color_black = "rgb("+ text_color_blackR +", "+ text_color_blackG +", "+ text_color_blackB +");";
    text_color_darkgrey = "rgb("+ text_color_darkgreyR +", "+ text_color_darkgreyG +", "+ text_color_darkgreyB +");";
    text_color_lightgrey = "rgb("+ text_color_lightgreyR +", "+ text_color_lightgreyG +", "+ text_color_lightgreyB +");";
    text_color_grey = "rgb("+ text_color_greyR +", "+ text_color_greyG +", "+ text_color_greyB +");";
    text_color_orange = "rgb("+ text_color_orangeR +", "+ text_color_orangeG +", "+ text_color_orangeB +");";
    text_color_darkorange = "rgb("+ text_color_darkorangeR +", "+ text_color_darkorangeG +", "+ text_color_darkorangeB +");";
    

}

if(darkmode === true){
    
    numberR = 0;
    numberG = 0;
    numberB = 0;


    text_numberR = 0;
    text_numberG = 0;
    text_numberB = 0;

    text_saturation = 0;
    

    //BARVY

    color_whiteR = 25 + numberR + saturation;
    color_whiteG = 25 + numberG + saturation;
    color_whiteB = 25 + numberB + saturation;

    color_blackR = 0 + numberR + saturation;
    color_blackG = 0 + numberG + saturation;
    color_blackB = 0 + numberB + saturation;

    color_darkgreyR = 83 + numberR + saturation;
    color_darkgreyG = 83 + numberG + saturation;
    color_darkgreyB = 83 + numberB + saturation;

    color_lightgreyR = 165 + numberR + saturation;
    color_lightgreyG = 165 + numberG + saturation;
    color_lightgreyB = 165 + numberB + saturation;

    color_greyR = 120 + numberR + saturation;
    color_greyG = 120 + numberG + saturation;
    color_greyB = 120 + numberB + saturation;

    color_orangeR = 255 + numberR + saturation;
    color_orangeG = 100 + numberG + saturation;
    color_orangeB = 122 + numberB + saturation;

    color_darkorangeR = 255 + numberR + saturation;
    color_darkorangeG = 122 + numberG + saturation;
    color_darkorangeB = 112 + numberB + saturation;

    //TEXT

    text_color_whiteR = 255 + text_numberR + text_saturation;
    text_color_whiteG = 255 + text_numberG + text_saturation;
    text_color_whiteB = 255 + text_numberB + text_saturation;

    text_color_blackR = 255 + text_numberR + text_saturation;
    text_color_blackG = 255 + text_numberG + text_saturation;
    text_color_blackB = 255 + text_numberB + text_saturation;

    text_color_darkgreyR = 255 + text_numberR + text_saturation;
    text_color_darkgreyG = 255 + text_numberG + text_saturation;
    text_color_darkgreyB = 255 + text_numberB + text_saturation;

    text_color_lightgreyR = 165 + text_numberR + text_saturation;
    text_color_lightgreyG = 165 + text_numberG + text_saturation;
    text_color_lightgreyB = 165 + text_numberB + text_saturation;

    text_color_greyR = 255 + text_numberR + text_saturation;
    text_color_greyG = 255 + text_numberG + text_saturation;
    text_color_greyB = 255 + text_numberB + text_saturation;

    text_color_orangeR = 255 + text_numberR + text_saturation;
    text_color_orangeG = 100 + text_numberG + text_saturation;
    text_color_orangeB = 122 + text_numberB + text_saturation;

    text_color_darkorangeR = 255 + text_numberR + text_saturation;
    text_color_darkorangeG = 122 + text_numberG + text_saturation;
    text_color_darkorangeB = 112 + text_numberB + text_saturation;

    
    
    
    color_white = "rgb("+ color_whiteR +", "+ color_whiteG +", "+ color_whiteB +");";
    color_black = "rgb("+ color_blackR +", "+ color_blackG +", "+ color_blackB +");";
    color_darkgrey = "rgb("+ color_darkgreyR +", "+ color_darkgreyG +", "+ color_darkgreyB +");";
    color_lightgrey = "rgb("+ color_lightgreyR +", "+ color_lightgreyG +", "+ color_lightgreyB +");";
    color_grey = "rgb("+ color_greyR +", "+ color_greyG +", "+ color_greyB +");";
    color_orange = "rgb("+ color_orangeR +", "+ color_orangeG +", "+ color_orangeB +");";
    color_darkorange = "rgb("+ color_darkorangeR +", "+ color_darkorangeG +", "+ color_darkorangeB +");";

    text_color_white = "rgb("+ text_color_whiteR +", "+ text_color_whiteG +", "+ text_color_whiteB +");";
    text_color_black = "rgb("+ text_color_blackR +", "+ text_color_blackG +", "+ text_color_blackB +");";
    text_color_darkgrey = "rgb("+ text_color_darkgreyR +", "+ text_color_darkgreyG +", "+ text_color_darkgreyB +");";
    text_color_lightgrey = "rgb("+ text_color_lightgreyR +", "+ text_color_lightgreyG +", "+ text_color_lightgreyB +");";
    text_color_grey = "rgb("+ text_color_greyR +", "+ text_color_greyG +", "+ text_color_greyB +");";
    text_color_orange = "rgb("+ text_color_orangeR +", "+ text_color_orangeG +", "+ text_color_orangeB +");";
    text_color_darkorange = "rgb("+ text_color_darkorangeR +", "+ text_color_darkorangeG +", "+ text_color_darkorangeB +");";
    
    

}


    document.querySelector('#style2').textContent = ""
    document.querySelector('#style2').textContent +=
    "*{transition: background-color 0.2s, color 0.2s;} :root { --color-white: "+ color_white +"; --color-black: "+ color_black +";--color-darkgrey: "+ color_darkgrey +";--color-lightgrey: "+ color_lightgrey +";--color-grey: "+ color_grey +";--color-orange: "+ color_orange +";--color-darkorange: "+ color_darkorange +";--color-text-white: "+ text_color_white +";--color-text-black: "+ text_color_black +";--color-text-darkgrey: "+ text_color_darkgrey +";--color-text-lightgrey: "+ text_color_lightgrey +";--color-text-grey: "+ text_color_grey +";--color-text-orange: "+ text_color_orange +";--color-text-darkorange: "+ text_color_darkorange +";}"

}
barvy()


