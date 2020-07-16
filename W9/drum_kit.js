const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  let marginTopVal = key.style.marginTop;
  if (!marginTopVal) {
    marginTopVal = "20px";
  } else {
    let tempInt = parseInt(marginTopVal.slice(0,marginTopVal.indexOf('px')));
    if (tempInt > 100) {
      marginTopVal = "10px";
    } else {
      tempInt += 10;
      marginTopVal = tempInt + "px";
    }

  }
    key.style.marginTop = marginTopVal;
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var getStyle = function (e, styleName) {
var styleValue = "";
if(document.defaultView && document.defaultView.getComputedStyle) {
  styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
}
else if(e.currentStyle) {
  styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();
  });
  styleValue = e.currentStyle[styleName];
}
return styleValue;
}

window.addEventListener('keydown', playSound);