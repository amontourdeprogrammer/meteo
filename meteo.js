
var request = require('request');

var url = "http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=CRMAF1IsXX9TfltsBXNSe1kxV2ILfQIlAn4FZglsUSxUP1EwAWFSNF8xVClUewA2VHlVNg41BTVROgV9CXtWNwljAGxSOV06UzxbPgUqUnlZd1c2CysCJQJpBWEJelEzVD5RPAF8UjFfOVQ%2FVHoANVRiVSoOLgU8UTYFawlmVjAJawBjUjJdO1M0WyYFKlJjWWJXYQsyAjoCYAU3CWBRZ1RhUTcBYlIyXzJUKFRiADJUblU3DjMFOFEyBWYJe1YqCRMAF1IsXX9TfltsBXNSe1k%2FV2kLYA%3D%3D&_c=6c10199ffa70be3b3d63ef751f577cf4"
	

request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', JSON.parse(body).request_state); // Print the HTML for the Google homepage. 
  console.log('temperature:', JSON.parse(body)["2017-04-18 11:00:00"]["temperature"]["2m"]);
});