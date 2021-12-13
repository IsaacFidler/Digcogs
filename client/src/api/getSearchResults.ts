
export const getSearchResults = (label:string, setState: (arg0: any) => any) => {
  const KEY = process.env.REACT_APP_DISCOGS_KEY;
  const SECRET = process.env.REACT_APP_DISCOGS_SECRET;

  var url = `https://api.discogs.com/database/search?q=${label}&key=${KEY}&secret=${SECRET}&type=label`;
  fetch(url)
    //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
    .then((response) => response.json())
    .then((result) => setState(result.results))
    .catch((error) => console.log('error', error));
}