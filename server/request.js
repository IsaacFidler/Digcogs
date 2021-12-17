app.get('/authorize', function (req, res) {
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    'ynCailbhySoeBgjSbiuR',
    'sYjPnEQSPdwqqZqwMChoUCTnKvLRJxiU',
    'http://your-script-url/callback',
    function (err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      res.redirect(requestData.authorizeUrl);
    }
  );
});