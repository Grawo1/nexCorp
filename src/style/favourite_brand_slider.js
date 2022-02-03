
let rowdisplay = false; //NEFUNGUJE A ANI FUNGOVAT NEBUDE, JELIKOŽ NA TO NEMÁM NERVY :)

//SET FIXED COLUMNS

let fixedColumnsMobile500 = 1;
let fixedColumnsDevice1000 = 2;
let fixedColumnsPc2000 = 2;

//SET COLUMNS

let columnsMobile500 = 9;
let columnsDevice1000 = 9;
let columnsPc2000 = 9;

//SET SKIP UNITS

let unitSkipMobile500 = 1;
let unitSkipDevice1000 = 2;
let unitSkipPc2000 = 2;

//SET UNIT HEIGHT

let unitHeightMobile500 = 60;
let unitHeightDevice1000 = 50;
let unitHeightPc2000 =35;
let unitHeightUnitMeasurement = "vw";

//SET UNIT GAP

let unitGapMobile500 = 3;
let unitGapDevice1000 = 3;
let unitGapPc2000 = 3;
let unitGapUnitMeasurement = "vw";

//SET BORDER RADIUS

let unitBorderRadiusMobile500 = 7;
let unitBorderRadiusDevice1000 = 7;
let unitBorderRadiusPc2000 = 7;
let unitBorderRadiusMeasurement = "px";














//NFAVOURITE BRANDS SECTION

function nacistse(){
document.querySelector('#style1').textContent = "";

document.querySelector('#style1').textContent +=
"@media screen and (min-width: 1000px){ :root {  --brands-unit-border-radius:"+ unitBorderRadiusPc2000 + unitBorderRadiusMeasurement +"; --favourite-brand-unit-columns-fixed:"+ fixedColumnsPc2000 +"; --favourite-brand-unit-columns:"+ columnsPc2000 +"; --favourite-brand-unit-skip:"+ unitSkipPc2000 +"; --favourite-brand-unit-height:"+ unitHeightPc2000 + unitHeightUnitMeasurement +"; --gap:"+ unitGapPc2000 + unitGapUnitMeasurement +"; }}";

document.querySelector('#style1').textContent +=
"@media screen and (max-width: 1000px){ :root {  --brands-unit-border-radius:"+ unitBorderRadiusDevice1000 + unitBorderRadiusMeasurement +"; --favourite-brand-unit-columns-fixed:"+ fixedColumnsDevice1000 +"; --favourite-brand-unit-columns:"+ columnsDevice1000 +"; --favourite-brand-unit-skip:"+ unitSkipDevice1000 +"; --favourite-brand-unit-height:"+ unitHeightDevice1000 + unitHeightUnitMeasurement +"; --gap:"+ unitGapDevice1000 + unitGapUnitMeasurement +"; }}";

document.querySelector('#style1').textContent +=
"@media screen and (max-width: 500px){ :root {  --brands-unit-border-radius:"+ unitBorderRadiusMobile500 + unitBorderRadiusMeasurement +"; --favourite-brand-unit-columns-fixed:"+ fixedColumnsMobile500 +"; --favourite-brand-unit-columns:"+ columnsMobile500 +"; --favourite-brand-unit-skip:"+ unitSkipMobile500 +"; --favourite-brand-unit-height:"+ unitHeightMobile500 + unitHeightUnitMeasurement +"; --gap:"+ unitGapMobile500 + unitGapUnitMeasurement +"; }}";







  
if(rowdisplay === true){
    document.querySelector('style').textContent += 
    "#favourite-brands-hidden { grid-auto-flow: column; grid-template-columns: repeat(var(--favourite-brand-unit-columns), 1fr); } "



}
else if(rowdisplay === false){
    document.querySelector('style').textContent += 
    "#favourite-brands-hidden { grid-template-columns: repeat(var(--favourite-brand-unit-columns), 1fr); } "

}

let numberOfColumnsFixed = getComputedStyle(document.documentElement).getPropertyValue('--favourite-brand-unit-columns-fixed')
let numberOfColumns = getComputedStyle(document.documentElement).getPropertyValue('--favourite-brand-unit-columns')
let numberOfUnitSkips = getComputedStyle(document.documentElement).getPropertyValue('--favourite-brand-unit-skip')


let numberOfColumnsFixedInt = parseInt(numberOfColumnsFixed, 10)
let numberOfColumnsInt = parseInt(numberOfColumns, 10)
let numberOfUnitSkipsInt = parseInt(numberOfUnitSkips, 10)


let caculateDecimal = (numberOfColumnsInt - numberOfColumnsFixedInt) / numberOfUnitSkipsInt;


var beforeDecimal = Math.trunc((numberOfColumnsInt - numberOfColumnsFixedInt) / numberOfUnitSkipsInt);

 var decimal = caculateDecimal - Math.floor(caculateDecimal)

 if(decimal > 0 && caculateDecimal > 0){
    beforeDecimal = beforeDecimal + 1
 }




 var element = document.getElementById("favourite-brands-hidden")
 var numberOfChildren = element.children.length


let sliderButt1 = document.getElementById("button-change1")
sliderButt1.addEventListener("click", slide1)

let sliderButt2 = document.getElementById("button-change2")
sliderButt2.addEventListener("click", slide2)

let delka1 = 0;
let transform1 = document.getElementById("favourite-brands-hidden")


function slide1(){
    if(delka1 > ( beforeDecimal * numberOfUnitSkipsInt)*-1){
        delka1 = delka1 - numberOfUnitSkipsInt;
        transform1.style.transform = "translateX(calc((var(--favourite-brands-unit-width-calc) + var(--gap))*" + delka1 + "))";

    }
    else{
        delka1 = 0;
        transform1.style.transform = "translateX(calc((var(--favourite-brands-unit-width-calc) + var(--gap))*" + delka1 + "))";

    }
    
    

}



function slide2(){
    if(delka1 < 0){
        delka1 = delka1 + numberOfUnitSkipsInt ;
        transform1.style.transform = "translateX(calc((var(--favourite-brands-unit-width-calc) + var(--gap))*" + delka1 + "))";

    }
    else{
        delka1 = (beforeDecimal * numberOfUnitSkipsInt)*-1;
        transform1.style.transform = "translateX(calc((var(--favourite-brands-unit-width-calc) + var(--gap))*" + delka1 + "))";

    }
    
    

}



//FAVOURITEBRAANDS TLACITKO

let pocetMezer = numberOfChildren/numberOfColumnsInt

var pocetMezerbeforeDecimal = Math.trunc(pocetMezer);


var pocetMezerDecimal = pocetMezer - Math.floor(pocetMezer)

if(pocetMezerDecimal > 0){
    pocetMezerbeforeDecimal = pocetMezerbeforeDecimal + 1
}

let sekceHeight = getComputedStyle(document.documentElement).getPropertyValue('--favourite-brand-unit-height')
let sekceGap = getComputedStyle(document.documentElement).getPropertyValue('--gap')

let sekceHeightInt = parseInt(sekceHeight, 10)
let sekceGapInt = parseInt(sekceGap, 10)



let calculateHeight = (sekceHeightInt*pocetMezerbeforeDecimal + sekceGapInt*pocetMezerbeforeDecimal - sekceGapInt)/2;


document.querySelector('#style1').textContent += 
/*"@media screen and (min-width: 1000px){ :root{ --favourite-brand-height: calc(var(--favourite-brand-unit-height)*"+ pocetMezerbeforeDecimal + " + var(--gap)*" + pocetMezerbeforeDecimal +" - var(--gap); } }"*/
".button-change{ transform: translateY(calc(("+ calculateHeight + unitHeightUnitMeasurement +" + var(--text-size-medium-2)/2)*-1)); } .button-change:hover{ transform: translateY(calc(("+ calculateHeight + unitHeightUnitMeasurement +" + var(--text-size-large-2)/2)*-1)); } "

}
nacistse()




