function ms(msValue, msBase, msRatio) {
  // (r^v)*b
  return Math.pow(msRatio, msValue) * msBase;
}

function changeBase(e) {
  msBase = e.value;
  msPage(msBase, msUnit, msRatio);
}
function changeUnit(e) {
  msUnit = e.value;
  msPage(msBase, msUnit, msRatio);
}
function changeRatio(e) {
  msRatio = e.value;
  msPage(msBase, msUnit, msRatio);
}


// alert(ms(3, 1, 1.5));

function msPage(msBase, msUnit, msRatio) {
  // upper bound of scale
  var u = 10;
  // lower bound of scale
  var l = -6;
  while (u >= l) {
    if (u >= 0) {
      document.getElementById('text_m'+u).style.fontSize=(ms(u,msBase,msRatio)+msUnit);
    } else {
      document.getElementById('text_mn'+Math.abs(u)).style.fontSize=(ms(u,msBase,msRatio)+msUnit);
    }
    u--;
  }
}

// base
var msBase = 1;
// units
var msUnit = 'em';
// ratio
// var msRatio = 1.2;
var msRatio = 1;

document.addEventListener('DOMContentLoaded', function(){
  // base
  msBase = document.getElementById("msBase").value;
  // units
  msUnit = document.getElementById("msUnit").value;
  // ratio
  msRatio = document.getElementById("msRatio").value;

  msPage(msBase, msUnit, msRatio);
});