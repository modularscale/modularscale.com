function ms(msValue, msBases, msRatios) {
  // (r^v)*b
  return Math.pow(msRatios, msValue) * msBases;
}