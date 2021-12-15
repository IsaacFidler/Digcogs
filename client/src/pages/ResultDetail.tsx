import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import {
  Container,
  Button
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


import { getResultVideos } from '../api/getResultVideos';
import { getIndividualReleaseInfo } from '../api/getIndividualReleaseInfo';
import { youtube_parser } from '../helpers/youtubeRegex';
import '../styles/ResultDetail.css'
import { Video } from '../components/Video';

const ResultDetail = () => {
  const x1 = 'https://www.youtube.com/embed/62EaMCOU7rI';
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
  const [videoArrayLength, setVideoArrayLength] = useState(0);
  const [videoArrayPointer, setVideoArrayPointer] = useState(0);

  //useEffect once on initila render
  useEffect(() => {
    getResultVideos(id, setReleases);
  }, []);

  //useEffect once when the releases for the label have been fetched
  useEffect(() => {
    setReleaseIds(releases.map((item)=>item.id))
    setReleaseTitle(releases.map((item)=>item.title))
    setReleaseArtist(releases.map((item)=>item.artist))
    setReleaseCatno(releases.map((item)=>item.catno))
    // console.log(releaseCounter)
    console.log(releaseIds);
  }, [releases]);



  useEffect(() => {
    getIndividualReleaseInfo(releaseIds[0], setVideoArray);

  }, [releaseIds]);

  useEffect(() => {
    console.log(releaseIds[releaseCounter])
    getIndividualReleaseInfo(releaseIds[releaseCounter], setVideoArray);

  }, [releaseCounter]);

  //useEffect once when the array of info for each video has been fetched
  useEffect(() => {

    if (videoArray){
    setVideoArrayUri(videoArray.map((item) => youtube_parser(item.uri)));
    setVideoArrayTitles(videoArray.map((item) => item.title));
    } else {
      console.log('no videos')
    }

  }, [videoArray]);

  useEffect(() => {
    console.log(videoArrayTitles)
    console.log(videoArrayUris)
  }, [videoArrayTitles]);

  const changeVideo = (index : number) => {
    setVideoArrayPointer(index)
  }

  return (
    <Container className="video-container">

      <div className="video-info">
        {releaseIds ? (
          <div className="d-grid gap-2 track-select">
            <div className="track-info">
              {/* left release button */}
              <Button
                className="left-release-button"
                style={{
                  backgroundColor: '#69F0AE',
                  borderColor: '#69F0AE',
                }}
                variant="primary"
                onClick={() => setReleaseCounter(releaseCounter - 1)}
              >
                <ArrowLeft />
              </Button>
                <div className = 'track-info-container'>
                  <div className="track-title">{`${releaseArtist[releaseCounter]} - ${releaseTitle[releaseCounter]} [${releaseCatno[releaseCounter]}]`}</div>
                  <div className="track-title">{releaseIds[releaseCounter]}</div>
                </div>

              {/* right release button */}
            <Button
              variant="primary"
              style={{
                backgroundColor: '#69F0AE',
                borderColor: '#69F0AE',
              }}
              className="right-release-button"
              onClick={() => setReleaseCounter(releaseCounter + 1)}
            >
              <ArrowRight />
            </Button>
            </div>
            <div className="player-container">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoArrayUris[videoArrayPointer]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="buttons">
                {videoArrayTitles ? (
                  videoArrayTitles.map((title) => (
                    <Button
                      style={{
                        backgroundColor: '#36474F',
                        fontSize: '13px',
                      }}
                      variant="primary"
                      className="track-button text-left"
                      size="sm"
                      onClick={() =>
                        setVideoArrayPointer(videoArrayTitles.indexOf(title))
                      }
                    >
                      {`${videoArrayTitles.indexOf(title)}. ${title}`}
                    </Button>
                  ))
                ) : (
                  <div>no videos</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>nos reulst</div>
        )}
      </div>
    </Container>
  );
};

export default ResultDetail;
