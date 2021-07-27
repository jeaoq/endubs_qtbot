const Twit = require('twit');
const config = require('./config');
const quotes = require('./quotes.json');
const episodes = require('./episodes.json');
const T = new Twit(config)

console.log("Bot has started!")

function getRandomQuote() {
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    var tweetableQuote = quote.quote + '\n\n— ' + episodes[quote.episode - 1].name;
    postQuote(tweetableQuote, '', function(data) {
        console.log(data.id_str);
        postQuote(
            'Episode ' + quote.episode + ' — ' + episodes[quote.episode - 1].name + '\nCharacters — ' + quote.character + '\n\n@ensemble_dubs',
            data.id_str
        )
    });
}

function postQuote(tweetableQuote, replyID, callback) {
    console.log("Posting quote to timeline...")
    try {
        T.post('statuses/update', { status: tweetableQuote , in_reply_to_status_id: replyID }, function(err, data, response) {
            //console.log(data);
            try {
                callback(data);
            }
            catch{

            }
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports.quotes = quotes;
module.exports.getRandomQuote = getRandomQuote;
