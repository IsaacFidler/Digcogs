import express from 'express'
const app = express()
const cors = require('cors')
const client_id = "ynCailbhySoeBgjSbiuR"
const clietn_secret = "sYjPnEQSPdwqqZqwMChoUCTnKvLRJxiU"

const Discogs = require('disconnect').Client;

// Request Token URL	https://api.discogs.com/oauth/request_token
// Authorize URL	https://www.discogs.com/oauth/authorize
// Access Token URL	https://api.discogs.com/oauth/access_token

app.use(cors())

app.get('/', (req, res) => {
  res.send('hellloo')
})

// app.get('/login/discogs', (req, res) => {
//   res.send('hellloo')
// })

app.use(cors())

let myRequestData;
let myAccessData;


app.get('/authorize', function (req, res) {
  console.log('yes')
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    'ynCailbhySoeBgjSbiuR',
    'sYjPnEQSPdwqqZqwMChoUCTnKvLRJxiU',
    'http://localhost:9000/callback',
    function (err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      myRequestData = requestData
      console.log(myRequestData)
      res.redirect(requestData.authorizeUrl);
    }
  );
});



app.get('/callback', function (req, res) {
  var oAuth = new Discogs(myRequestData).oauth();
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function (err, accessData) {
      // Persist "accessData" here for following OAuth calls
      myAccessData = accessData
      console.log(myAccessData)
      res.send('Received access token!');
    }
  );
});

app.get('/identity', function (req, res) {
  console.log(myAccessData)
  var dis = new Discogs(myAccessData);

  dis.getIdentity(function (err, data) {
    console.log(data)
    res.send(data);
  });
});

const PORT = 9000

app.listen(PORT, () => console.log(`🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️ listening http://localhost:${PORT}🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️`))

