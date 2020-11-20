require('dotenv').config()

if (!process.env.ACCESS_TOKEN
    || !process.env.ACCESS_TOKEN_SECRET
    || !process.env.API_KEY
    || !process.env.API_SECRET_KEY){
        console.error('Please set the env vars of access token and consumer keys')
        process.exit(1)
};

const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    API_KEY,
    API_SECRET_KEY,
    '1.0A',
    null,
    'HMAC-SHA1'
);

// oauth.get(
//     'https://api.twitter.com/1.1/trends/place.json?id=1',
//     ACCESS_TOKEN,
//     ACCESS_TOKEN_SECRET,
//     (error, data, response) => {
//         if(error) return console.error(error);
//         data = JSON.parse(data);
//         console.log(JSON.stringify(data, 0, 2));
//     }
// )

var request = require('request');
 
const BEARER_TOKEN = process.env.BEARER_TOKEN;
const URI = 'https://api.twitter.com/2/tweets/search/recent?query=地震&tweet.fields=attachments,author_id,context_annotations,geo'
request({
  url: encodeURI(URI),
  auth: {
    'bearer': BEARER_TOKEN
  }
}, function(err, res) {
//   console.log(res.body);
//   console.log(JSON.stringify(res.body, null, "  "));
  x = JSON.parse(res.body)
//   console.log(x);
  x.data.forEach(element => {
      console.log(element.text);
      if(element.geo){
          console.log('geo: ', geo.coordinates.coordinates);
      }
  });
});


// .env file:
// ACCESS_TOKEN=XXXX
// ACCESS_TOKEN_SECRET=XXXX
// BEARER_TOKEN=XXXX
// API_KEY=XXXX
// API_SECRET_KEY=XXXX
