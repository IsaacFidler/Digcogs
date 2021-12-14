import React, { useState, useEffect } from 'react';

import {
  Container,
  Button
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


import { getResultVideos } from '../api/getResultVideos';
import { getIndividualReleaseInfo } from '../api/getIndividualReleaseInfo';

import '../styles/ResultDetail.css'

const ResultDetail = () => {
  const { id } = useParams();
  //need to write interface for object coming from discogs api
  const [releases, setReleases] = useState<any[]>([]);

  const [releaseIds, setReleaseIds] = useState<number[]>([]);
  const [releaseTitle, setReleaseTitle] = useState<number[]>([]);
  const [releaseArtist, setReleaseArtist] = useState<number[]>([]);
  const [releaseCatno, setReleaseCatno] = useState<number[]>([]);

  const [releaseCounter, setReleaseCounter] = useState(0);

  const [videoArray, setVideoArray] = useState<any[]>([]);
  const [videoArrayUris, setVideoArrayUri] = useState<any[]>([]);
  const [videoArrayTitles, setVideoArrayTitles] = useState<any[]>([]);

  //useEffect once on initila render
  useEffect(() => {
    getResultVideos(id, setReleases);
    getIndividualReleaseInfo('11594503', setVideoArray);

  }, []);

  //useEffect once when the releases for the label have been fetched
  useEffect(() => {
    setReleaseIds(releases.map((item)=>item.id))
    setReleaseTitle(releases.map((item)=>item.title))
    setReleaseArtist(releases.map((item)=>item.artist))
    setReleaseCatno(releases.map((item)=>item.catno))
  }, [releases]);

  //useEffect once when the array of info for each video has been fetched
  useEffect(() => {
    setVideoArrayUri(videoArray.map((item) => item.uri));
    setVideoArrayTitles(videoArray.map((item) => item.title));
  }, [videoArray]);

  return (
    <Container className="video-container">
      <Button
        variant="primary"
        onClick={() => setReleaseCounter(releaseCounter - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        onClick={() => setReleaseCounter(releaseCounter + 1)}
      >
        Next
      </Button>
      <div className="video-info">
        {releaseIds ? (
          <div>
            <div>{`${releaseArtist[releaseCounter]} - ${releaseTitle[releaseCounter]} [${releaseCatno[releaseCounter]}]`}</div>
            <div>{releaseIds[releaseCounter]}</div>
          </div>
        ) : (
          <div>nos reulst</div>
        )}
      </div>
    </Container>
  );
};

export default ResultDetail;
