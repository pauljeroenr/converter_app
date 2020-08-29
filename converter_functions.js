export function fahrenheit2celsius(fahrenheit) {
  var result = Math.round((((fahrenheit - 32) / 1.8) + Number.EPSILON) * 100) / 100;
  return(result.toString())
};
export function inch2cm(inch) {
  var result = inch * 2.54;
  return(result.toString())
};
export function cup2ml(cup) {
  var result = cup * 236.588;
  return(result.toString())
};
export function yard2m(yard) {
  var result = yard * 0.9144;
  return(result.toString())
};
export function ounce2ml(oz) {
  var result = oz * 29.57353;
  return(result.toString())
}