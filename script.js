var Mainimg = document.getElementById("Mainimg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function(){
    Mainimg.src=smallimg[0].src;
}

smallimg[1].onclick = function(){
    Mainimg.src=smallimg[1].src;
}

smallimg[2].onclick = function(){
    Mainimg.src=smallimg[2].src;
}

smallimg[3].onclick = function(){
    Mainimg.src=smallimg[3].src;
}