
// Dependencies =========================
var
    twit = require('twit'),
    config = require('./config');
    meteo = require('./meteo');
    Bonjour = function(){require('./bonjour')};
    Retweet = function(){require('./retweet')};


var Twitter = new twit(config);


var TwitterBot = require("node-twitterbot").TwitterBot;


Bonjour();

// RETWEET BOT ==========================



// grab & retweet as soon as program is running...
Retweet();






