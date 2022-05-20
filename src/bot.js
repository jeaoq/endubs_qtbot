const Twit = require("twit");
const config = require("./config");
const quotes = require("./quotes.json");
const episodes = require("./episodes.json");
const T = new Twit(config);

console.log("Bot has started!");

const fs = require("fs");
const fetch = require("node-fetch");

const url = "https://ensemblestars.com/pre_reg/total_count";

let settings = { method: "Get" };

function getRandomQuote() {
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.total);
      postQuote({ us: 0, en: json.data.total }, "", function (data) {
        console.log("success!");
      });
    });

  // var quote = quotes[Math.floor(Math.random()*quotes.length)];
  // var tweetableQuote = quote.quote + '\n\n— ' + episodes[quote.episode - 1].name;
  // postQuote(tweetableQuote, '', function(data) {
  //     console.log(data.id_str);
  //     postQuote(
  //         'Episode ' + quote.episode + ' — ' + episodes[quote.episode - 1].name + '\nCharacters — ' + quote.character + '\n\n@ensemble_dubs',
  //         data.id_str
  //     )
  // });
}

function postQuote(preregCount, replyID, callback) {
  // https://prereg-count.vercel.app/render/character.png?us=10000&en=50000
  var filePath = "./image.png";
  console.log("Posting quote to timeline...");

  const imageURL = `https://prereg-count.vercel.app/render/character.png?us=${preregCount.us}&en=${preregCount.en}`;

  async function download() {
    const response = await fetch(imageURL);
    const buffer = await response.buffer();
    fs.writeFile(`./image.png`, buffer, () => {
      console.log("finished downloading!");
      T.postMediaChunked(
        { file_path: filePath },
        function (err, data, response) {
          console.log(data);
          T.post(
            "statuses/update",
            {
              status: `🇺🇸 US — ${preregCount.us} producers\nensemblestars.com/pre/us\n🇬🇧 EN — ${preregCount.en} producers\nensemblestars.com/pre/en\n\nPre-register now and get rewards such as exclusive cards and in-game items!!`,
              media_ids: data.media_id_string,
            },
            function (err, data, response) {
              console.log(data);
              try {
                callback(data);
              } catch {}
            }
          );
        }
      );
    });
  }
  download();
  //   try {
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
}

module.exports.quotes = quotes;
module.exports.getRandomQuote = getRandomQuote;
