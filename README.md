# @wttm_qtbot

<a href="https://twitter.com/ensemble_stars/status/681716281414815744"><img align="right" src="https://user-images.githubusercontent.com/23179278/87398281-85c97880-c56a-11ea-9510-044666dafcf2.png" alt="真白友也と日々樹渉" title="そのとき触れたものが愛おしくて、あの泣き顔を笑顔にしてやりたくなったんだ"></a>

[![License](https://img.shields.io/github/license/watatomo/wttm_qtbot)](https://github.com/watatomo/wttm_qtbot/blob/master/LICENSE)
[![Status](https://img.shields.io/badge/status-in%20development-critical.svg)](https://twitter.com/wttm_qtbot)

[@wttm_qtbot](https://twitter.com/wttm_qtbot) is a Twitter bot that publishes (translated) quotes pertaining to Tomoya Mashiro and Wataru Hibiki's relationship ~~in hopes of making others consider the pair~~. More quotes will be added over time. [Interested in the pair? Here's a guide about them by Ren in the works!](https://rebrand.ly/wttm_guide)

[@ensemble_dubs](https://twitter.com/ensemble_dubs) is another Twitter bot forked from [@wttm_qtbot](https://twitter.com/wttm_qtbot), displaying random quotes from the official dubbed version of Ensemble Stars! (Anime). The bot is still in progress.

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
