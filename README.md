[![Version](https://img.shields.io/badge/VERSION-0.3-BLUE)](https://img.shields.io/badge/VERSION-0.3-BLUE) [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.txt)
# Canada Beer Map

*Please note this is a Work in Progress*

A mobile friendly beer map created in React Native using [Expo](https://expo.io/)

The Beer Map is available as a website or as a mobile app. It is not available in app stores and must be loaded via the Expo app (See below)

## Website

*you may need to clear your browser cache to get the latest version*

[Web Demo](https://beerify.github.io/map/)

## Mobile

### Expo App

You must download the Expo app to run the Beer Map on your phone as an app as opposed to in a web browser
[Expo for iOS](https://itunes.apple.com/app/apple-store/id982107779)

[Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

### Beer Map App

[Mobile Apps Link](https://expo.io/@beerify/map)

Scan This Code in the Expo App:

![qr](https://github.com/beerify/map/blob/master/expo.png)

## Other doc files
| Link      |       Contents |
|----------|:-------------|
| [CONTRIBUTING.md](https://github.com/beerify/map/blob/master/CONTRIBUTING.md) | Ways you can contribute or collaborate |
| [TODO.md](https://github.com/beerify/map/blob/master/TODO.md)  | A list of things not yet done   |
| [DEVELOPMENT.md](https://github.com/beerify/map/blob/master/DEVELOPMENT.md)  | how to install and run the code|

## Images
- avatars and banners are served from google cloud buckets
- images are ripped from twitter

## Data
- Data was scraped from Twitter and Google Places
- Each province has its own json file in /data/{PR}.json
  - ie: assets/data/ON.json etc
- This is the backend there is no database

### Errors in Data
The scripts that imported the data are imperfect. Please create an issue or submit a pull request to help fix any issues such as incorrect location

### Ontario Specific Data (Not Implemented)
- A CSV was exported from a spreadsheet provided by Jordan St. John
- It was converted to json using this [online converter](https://csvjson.com/csv2json)
- [jq](https://github.com/stedolan/jq/wiki/Installation) was used to add and remove keys
  - see this script: `./data/tweakkeys.sh`
  - input: `./data/from-csv-ontario.json`
  - output: `./data/ontario.json`
