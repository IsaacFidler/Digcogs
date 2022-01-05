import express from 'express'
import cookieSession from 'cookie-session'
const app = express()
const cors = require('cors')
const client_id = "ynCailbhySoeBgjSbiuR"
const clietn_secret = "sYjPnEQSPdwqqZqwMChoUCTnKvLRJxiU"
const cookie_secret = 'Drumkit20!'
const Discogs = require('disconnect').Client;

// Request Token URL	https://api.discogs.com/oauth/request_token
// Authorize URL	https://www.discogs.com/oauth/authorize
// Access Token URL	https://api.discogs.com/oauth/access_token



app.use(cors())

app.use(
  cookieSession({
    secret: cookie_secret
  })
)

app.get('/', (req, res) => {
  res.send('welcome to digcogs auth, <a href="admin">admin</a>')
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

app.get('/yes', function (req, res) {
  res.send('yes')

});



app.get('/callback', function (req, res) {
  var oAuth = new Discogs(myRequestData).oauth();
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function (err, accessData) {
      // Persist "accessData" here for following OAuth calls
      myAccessData = accessData
      console.log(myAccessData)

      if (accessData)
      {
        console.log('**** B* * * * ')
        console.log(accessData)
        // req.session.discogsId = accessData.id
        req.session.token = accessData.token
        // res.send(req.session.token)
        // res.redirect("http://localhost:3000/dashboard");
        res.redirect("/admin");
      } else
      {
        res.send("Login did not succeed!")
      }
      // res.redirect('http://localhost:3000/LoginSuccessful');
    }
  );
});

// app.get('/admin', (req, res) => {
//   console.log(req.session)

//   if (req.session.token)
//   {
//     res.send("Hello Kevin <pre>" + JSON.stringify(req.session, null, 2) + '<a href="logout">logout</a>');

//   } else
//   {

//     res.send('you need to login, <a href="authorize">login</a>');
//     // res.redirect("http://localhost:3000/");
//   }
// })

app.get('/admin', (req, res) => {
  if (req.session.token)
  {

    console.log(req.session.token)
    res.send(req.session.token)
  } else
  {

    console.log('no token')
    res.send('not authenticated')
  }

  // if (req.session.token)
  // {
  //   res.send("Hello Kevin <pre>" + JSON.stringify(req.session, null, 2) + '<a href="logout">logout</a>');

  // } else
  // {

  //   res.send('you need to login, <a href="authorize">login</a>');
  //   // res.redirect("http://localhost:3000/");
  // }
})

app.get('/identity', function (req, res) {
  console.log(myAccessData)
  var dis = new Discogs(myAccessData);

  dis.getIdentity(function (err, data) {
    console.log(data)
    res.send(data);
  });
});

app.get("/logout", (req, res) => {
  if (req.session) req.session = null;
  res.redirect("/");
});

const PORT = 9000

app.listen(PORT, () => console.log(`🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️ listening http://localhost:${PORT}🏄‍♂️🏄‍♂️🏄‍♂️🏄‍♂️`))

