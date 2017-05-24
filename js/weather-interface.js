var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;
var apiKey = "994f111c96ec667600e5cf1ec0dfedb3";




$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});
