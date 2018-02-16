/**
 * Using ajax, download some data from a remote server and log it to the console
 */
var placeHolder;

var capital = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/json/world-country-capitals.json");

capital.then(function(res){
  placeHolder = JSON.parse(res);
  //console.log(placeHolder);
  addMarkers(map,placeHolder);
});


var addMarkers = function(map,data) {
  for(i = 0; i < placeHolder.length; i++){
      L.marker([data[i].CapitalLatitude,data[i].CapitalLongitude]).addTo(map).bindPopup(data[i].CapitalName);
    }
};



var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 2
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// L.terminator().addTo(map)
