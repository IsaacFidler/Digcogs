export const getResultVideos = (
  labelId: string | undefined,
  setState: (arg0: any) => any
) => {
  const KEY = process.env.REACT_APP_DISCOGS_KEY;
  const SECRET = process.env.REACT_APP_DISCOGS_SECRET;

  var url = `https://api.discogs.com/labels/${labelId}/releases?page=1,per_page=5&key=${KEY}secret=${SECRET}`;
  fetch(url)
    //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
    .then((response) => response.json())
    .then((result) => {
      console.log(result.releases);
      setState(result.releases);
    })
    .catch((error) => console.log('error', error));
};
