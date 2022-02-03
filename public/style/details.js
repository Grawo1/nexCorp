var searchbutton = document.getElementsByClassName('search')
var searchfield = document.getElementsByClassName('myInput')
searchbutton[0].onclick = function () {
    searchbutton[0].classList.add("search-active")
    searchfield[0].classList.add("search-input-active")
 
    
}

document.addEventListener("click", function(e)
{
    var obj = (e.target ? e.target : e.srcElement);
    console.log(obj.className)
    if (!obj.className.includes('search-section'))
    {
        // Perform your click action. 

        searchbutton[0].classList.remove('search-active')
        searchfield[0].classList.remove("search-input-active")

    }
});