
var request = require('request');

var url = "http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=CRMAF1IsXX9TfltsBXNSe1kxV2ILfQIlAn4FZglsUSxUP1EwAWFSNF8xVClUewA2VHlVNg41BTVROgV9CXtWNwljAGxSOV06UzxbPgUqUnlZd1c2CysCJQJpBWEJelEzVD5RPAF8UjFfOVQ%2FVHoANVRiVSoOLgU8UTYFawlmVjAJawBjUjJdO1M0WyYFKlJjWWJXYQsyAjoCYAU3CWBRZ1RhUTcBYlIyXzJUKFRiADJUblU3DjMFOFEyBWYJe1YqCRMAF1IsXX9TfltsBXNSe1k%2FV2kLYA%3D%3D&_c=6c10199ffa70be3b3d63ef751f577cf4"

var date = new Date;

module.exports = function(cb) {
  request(url, function (error, response, body) {
    	  var get = JSON.parse(body);
  		  var temp = get["2017-04-" + date + " 11:00:00"]["temperature"]["2m"];
  		  var pluie = get["2017-04-21 11:00:00"]["pluie"];
        temp = temp - 273.15;


        if (temp<282) {
    		  console.log('temperature:', temp);
    
        }
        else {
          console.log (null);
        }

        cb(temp);
    	
  });
}





