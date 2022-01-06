var minWithM = window.matchMedia("(min-width: 0px)");


minWithM.addListener(zmena1);


zmena1(minWithM);


function zmena1(minWithM) {
  if (minWithM.matches) {
    nacistse()   
    
  }
}

var maxWithM = window.matchMedia("(max-width: 500px)");


maxWithM.addListener(zmena2);


zmena2(maxWithM);


function zmena2(maxWithM) {
  if (maxWithM.matches) {
    nacistse()
    
    
  }
}

var minWithD = window.matchMedia("(min-width: 500px)");


minWithD.addListener(zmena3);


zmena3(minWithD);


function zmena3(minWithD) {
  if (minWithD.matches) {
    nacistse()
    
    
  }
}

var maxWithD = window.matchMedia("(max-width: 1000px)");


maxWithD.addListener(zmena4);


zmena4(maxWithD);


function zmena4(maxWithD) {
  if (maxWithD.matches) {
    nacistse()
    
    
  }
}

var minWithP = window.matchMedia("(min-width: 1000px)");


minWithP.addListener(zmena5);


zmena5(minWithP);


function zmena5(minWithP) {
  if (minWithP.matches) {
    nacistse()

    
    
  }
}

