export function converter_function(input, type) {
  if (type === "fahrenheit") {
    var result = Math.round((((input - 32) / 1.8) + Number.EPSILON) * 100) / 100; 
  } else if (type === "cup") {
    var result = Math.round(((input * 236.588) + Number.EPSILON) * 100) / 100;
  } else if (type === "tbsp") {
    var result =  Math.round(((input * 14.7868) + Number.EPSILON) * 100) / 100;
  } else if (type === "teasp") {
    var result = Math.round(((input * 4.92892) + Number.EPSILON) * 100) / 100;    
  } else if (type === "oz") {
    var result = Math.round(((input * 29.57353) + Number.EPSILON) * 100) / 100;
  } else if (type === "gallon") {
    var result = Math.round(((input * 3.78541) + Number.EPSILON) * 100) / 100;
  } else if (type === "pint") {
    var result = Math.round(((input * 473.176) + Number.EPSILON) * 100) / 100; 
  } else if (type === "inch") {
    var result = Math.round(((input * 2.54) + Number.EPSILON) * 100) / 100;
  } else if (type === "feet") {
    var result = Math.round(((input * 30.48) + Number.EPSILON) * 100) / 100;
  } else if (type === "mile") {
    var result = Math.round(((input * 1.60934) + Number.EPSILON) * 100) / 100;
  } else if (type === "yard") {
    var result = Math.round(((input * 0.9144) + Number.EPSILON) * 100) / 100;
  }
  return (result.toString());
}