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

app.get('/authorize', function (req, res) {
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    'ynCailbhySoeBgjSbiuR',
    'sYjPnEQSPdwqqZqwMChoUCTnKvLRJxiU',
    'http://localhost:3000/dashboard',
    function (err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      res.redirect(requestData.authorizeUrl);
    }
  );
});
// app.get('/login/discogs/callback', (req, res) => {
//   res.send('hellloo')
// })

const PORT = 9000

app.listen(PORT, () => console.log(`🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️ listening http://localhost:${PORT}🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️`))

