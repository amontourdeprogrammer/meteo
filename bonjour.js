
var twit = require('twit');
var config = require('./config');

var requestTemperature = require('./meteo');

var Twitter = new twit(config);


module.exports = function() {
	requestTemperature(function(temp, pluie) {
		if (temp > 12 && pluie == 0) {
			Twitter.post('statuses/update', { status: 'Bonjour! La température est de: ' + temp +'☀'}, function(err, data, response) {
	  		//console.log(JSON.stringify(response))
	  		});	
		}

		else if (temp > 12 && pluie > 0) {
			Twitter.post('statuses/update', { status: 'Bonjour! La température est de: ' + temp +'☔'}, function(err, data, response) {
	  		//console.log(JSON.stringify(response))
	  		});	
		}
	  	
		})

};
