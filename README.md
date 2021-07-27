# @ensemble_dubs / endubs

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Status](https://img.shields.io/badge/status-running-lightgreen.svg)](https://twitter.com/ensemble_dubs)

<img align="right" height="200px" src="https://static.wikia.nocookie.net/ensemble-stars/images/e/ef/Mao_Isara_Anime_Chibi.png/revision/latest?cb=20190425120649">

[@ensemble_dubs](https://twitter.com/ensemble_dubs) is another Twitter bot forked from [@wttm_qtbot](https://twitter.com/wttm_qtbot), displaying random quotes from the official dubbed version of Ensemble Stars! (Anime). Currently has quotes up to the 3rd episode.

The bot is forked from [@wttm_qtbot](https://twitter.com/wttm_qtbot), a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. [Interested in the pair? Here's a guide about them by Ren in the works!](https://rebrand.ly/wttm_guide)

## Features

TBD

## Quick Start

Apply for a [Developer account](https://developer.twitter.com/) using the bot's Twitter. Create an app and generate consumer keys.

```sh
$ cd /DIRECTORY_WHERE_THE_BOT_IS_STORED
$ git clone --single-branch -b master https://github.com/watatomo/wttm_qtbot.git
$ npm install
```

Edit `package.json` to have the bot's information. Fill out `example.env` and rename it to `.env`

```env
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
POST_TO_TWITTER=true
```

## Attributions

Bot source code is forked from [@watatomo/wttm_qtbot](https://github.com/watatomo/wttm_qtbot/) with permission.
Dub scripts are taken from Funimation directly with minor extra transcriptions by me (to convey more accurately about what's going on without the images).

---

Questions? Comments? Concerns? Contact me via [Twitter](https://twitter.com/junsweats) or [open an issue](https://github.com/jeaoq/endubs_qtbot/issues). For issues about the bot's base code, [open an issue on @watatomo/wttm_qtbot](https://github.com/watatomo/wttm_qtbot/issues)
