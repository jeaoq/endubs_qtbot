"use strict";

var bot = require("./src/bot");

// bot.getRandomQuote();
setInterval(bot.getRandomQuote, 1000 * 60 * 60);
