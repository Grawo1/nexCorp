function setMyHandler(){
    var elements = document.getElementsByClassName('product-unit-title');
    for(var i = 0; i < elements.length; i++){
       elements[i].onclick = function(){ 
           this.style.display = "grid";
           let parent = this.parentElement;
           let parentchild = parent.children;
           console.log(parentchild[1])
           parentchild[1].classList.toggle("active");
       };
    }
 }
 setMyHandler()