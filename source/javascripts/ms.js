var msValue = 0;
var msBases = 1;
var msRatios = (1+ Math.sqrt(5))/2;

function ms(value, bases, ratios) {

  if (typeof value === 'string') {
    value = 1;
  }
  if (value == undefined) {
    value = msValue;
  }
  if (bases == undefined) {
    bases = msBases;
  }
  if (ratios == undefined) {
    ratios = msRatios;
  }

  // (r^v)*b
  return Math.pow(ratios, value) * bases;
}