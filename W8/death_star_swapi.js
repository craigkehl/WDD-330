// select elements
var elements = Array.from(document.querySelectorAll('svg .selector'));

// add event listeners
elements.forEach(function(el) {
   el.addEventListener("touchstart", start);
   el.addEventListener("mousedown",  start);
   el.addEventListener("touchmove",  move);
   el.addEventListener("mousemove",  move);
})

// event listener functions

function start(e){
  console.log(e);
  // just an example
}

function move(e){
  console.log(e);
  // just an example
}
The sample code you present is somewhat contrived, but here's a rewrite that makes it work...

var a = document.getElementById("alphasvg");
a.addEventListener("load",function(){
  var svgDoc = a.contentDocument;
  var els = svgDoc.querySelectorAll(".myclass");
  for (var i = 0, length = els.length; i < length; i++) {
    els[i].addEventListener("click", 
       function(){ console.log("clicked"); 
    }, false);
  }
},false);