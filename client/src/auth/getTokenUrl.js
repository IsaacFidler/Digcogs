const fetch = require("node-fetch");
export const getTokenUrl = () => {

  let headers = new Headers();

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  var requestOptions = {
    mode: 'cors',
    method: 'GET',
    redirect: 'follow',
    headers: headers
  };

  fetch("http://localhost:9000/authorize", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

//
getTokenUrl()
