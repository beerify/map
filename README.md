# Canada Beer Map

A mobile friendly beer map created in React Native using [Expo](https://expo.io/)

## Demo

[Web Demo](https://beerify.github.io/map/)

## Mobile (WIP)

Mobile apps should be available soon

## Contributing

You can contribute or collaborate in any number of ways:

1) by changing the code and creating a pull request
  - You can edit a file in github and a pull request will be created for you
2) by creating an issue
3) by email: eli@beerify.io


## Data
- Data was scraped from Twitter and Google Places
- Each province has its own json file in /data/{PR}.json
  - ie: /data/ON.json etc
- This is the backend there is no database

### Errors in Data
The scripts that imported the data are quite imperfect. Please create an issue or submit a pull request to help fix

### Ontario Specific Data (Not Implemented)
- A CSV was exported from a spreadsheet provided by Jordan St. John
- It was converted to json using this [online converter](https://csvjson.com/csv2json)
- [jq](https://github.com/stedolan/jq/wiki/Installation) was used to add and remove keys
  - see this script: `./data/tweakkeys.sh`
  - input: `./data/from-csv-ontario.json`
  - output: `./data/ontario.json`

### TODO
- incorporate JSJ's Ontario Data

### Changes or updates

Follow the guidlines for Contributing above

Edit any file from within github using the pencil icon. Upon save a pull request should be created autmatically


## Development

### Install Expo
npm install -g expo

### Get the code
`git pull https://github.com/beerify/map.git`

## Install dependencies
Do this only if you wish to run the code

`cd map && npm install`


## Start the App
### Android
`expo start:android`

or

`expo start` then press a

### iOS
`expo start:ios`

or

`expo start` then press i

### Web
`expo start:web`

or

`expo start` then press w