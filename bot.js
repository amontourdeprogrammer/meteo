require('dotenv').config()
// Dependencies =========================
var
    config = require('./config');
    Bonjour = require('./bonjour');
    Retweet = require('./retweet');
    twit = require('twit');

var Twitter = new twit(config);


var TwitterBot = require("node-twitterbot").TwitterBot;


Bonjour();

// RETWEET BOT ==========================



// grab & retweet as soon as program is running...
Retweet();






