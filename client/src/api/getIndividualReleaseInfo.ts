export const getIndividualReleaseInfo = (
  releaseId: string | undefined,
  setState: (arg0: any) => any
) => {
  const KEY = process.env.REACT_APP_DISCOGS_KEY;
  const SECRET = process.env.REACT_APP_DISCOGS_SECRET;

  var url = `https://api.discogs.com/releases/${releaseId}?UK&key=${KEY}&secret=${SECRET}`;
  fetch(url)
    //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
    .then((response) => response.json())
    // .then((result) => setState(result.releases))
    .then((result) => {
      setState(result.videos)
    })
    .catch((error) => console.log('error', error));

};