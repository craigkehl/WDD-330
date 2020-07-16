var mice = document.querySelectorAll("#mouseContainer img");
var mouse = null;
for (var i = 0; i < mice.length; i++) {
  mouse = mice[i];
  mouse.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", this.id);
  });
}

var cat = document.getElementById("cat");
cat.addEventListener("dragover", function (event) {
  event.preventDefault();
});

cat.addEventListener("drop", function (event) {
  var mouseHash = {
    mouse1: 'NOMNOMNOM',
    mouse2: 'Meow',
    mouse3: 'Purrrrrr ...'
  };
  
});

var catHeading = document.getElementById('catHeading');

var mouseID = event.originalEvent.dataTransfer.getData("text/plain");

catHeading.innerHTML = mouseHash[mouseID];

var mousey = document.getElementById(item);
mousey.parentNode.removeChild(mousey);

event.preventDefault();