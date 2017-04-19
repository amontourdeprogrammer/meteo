
var twit = require('twit');
var config = require('./config');

var requestTemperature = require('./meteo');


var Twitter = new twit(config);

var bonjour = function() {
	requestTemperature(function(temp) {
	  Twitter.post('statuses/update', { status: 'La température est de: ' + temp}, function(err, data, response) {
	  	console.log(JSON.stringify(response))
	  
	  })		
	})
};

bonjour();

