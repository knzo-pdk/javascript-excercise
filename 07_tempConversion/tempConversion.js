const convertToCelsius = function(num) {

  let converted = ((num - 32) * 5/9);
  var rounded = Math.round(converted * 10) / 10

  return rounded;
}; 

const convertToFahrenheit = function(num) {
  let converted = (num * 9/5 + 32);
  var rounded = Math.round(converted * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
