import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Button, Image, InputGroup, FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import background from '../assets/backgroundBlob.png';

//bootstrap components

//api functions
import { getResultVideos } from '../api/getResultVideos';
import { getIndividualReleaseInfo } from '../api/getIndividualReleaseInfo';
import { youtube_parser } from '../helpers/youtubeRegex';
import '../styles/ResultDetail.css';
import { Video } from '../components/Video';

//components

import DiscogsButtons from '../components/DiscogsButtons';
import Sidebar from '../components/Sidebar';
import DashHeader from '../components/DashHeader';
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
  const [videoArrayLength, setVideoArrayLength] = useState(0);
  const [videoArrayPointer, setVideoArrayPointer] = useState(0);

  //useEffect once on initila render
  useEffect(() => {
    getResultVideos(id, setReleases);
  }, []);

  //useEffect once when the releases for the label have been fetched
  useEffect(() => {
    setReleaseIds(releases.map((item) => item.id));
    setReleaseTitle(releases.map((item) => item.title));
    setReleaseArtist(releases.map((item) => item.artist));
    setReleaseCatno(releases.map((item) => item.catno));
    // console.log(releaseCounter)
    console.log(releaseIds);
  }, [releases]);

  useEffect(() => {
    getIndividualReleaseInfo(releaseIds[0], setVideoArray);
  }, [releaseIds]);

  useEffect(() => {
    console.log(releaseIds[releaseCounter]);
    getIndividualReleaseInfo(releaseIds[releaseCounter], setVideoArray);
  }, [releaseCounter]);

  //useEffect once when the array of info for each video has been fetched
  useEffect(() => {
    if (videoArray) {
      setVideoArrayUri(videoArray.map((item) => youtube_parser(item.uri)));
      setVideoArrayTitles(videoArray.map((item) => item.title));
    } else {
      console.log('no videos');
    }
  }, [videoArray]);

  useEffect(() => {
    console.log(videoArrayTitles);
    console.log(videoArrayUris);
  }, [videoArrayTitles]);

  const changeVideo = (index: number) => {
    setVideoArrayPointer(index);
  };

  return (
    <div className="video-container">
      <Image className="background-player" src={background} />
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="video-info">
        {releaseIds ? (
          <div className="track-select">
            <DashHeader />
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoArrayUris[videoArrayPointer]}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="video-frame"
              ></iframe>
            </div>
            <div className="bottom-half">
              <div className="track-info">
                {/* left release button */}
                <div className="track-info-container">
                  <div className="track-title">{`${releaseArtist[releaseCounter]} - ${releaseTitle[releaseCounter]} [${releaseCatno[releaseCounter]}]`}</div>
                  <div className="track-id">{releaseIds[releaseCounter]}</div>
                </div>
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
                <div className="discog-buttons-container">
                  <DiscogsButtons
                    releaseID={releaseIds[releaseCounter]}
                    title={''}
                    logo={true}
                  />
                  <DiscogsButtons
                    releaseID={releaseIds[releaseCounter]}
                    title={''}
                    logo={false}
                  />
                  <DiscogsButtons
                    releaseID={releaseIds[releaseCounter]}
                    title={''}
                    logo={false}
                  />
                </div>
              </div>
              <div className="player-container">
                <div className="buttons">
                  {videoArrayTitles ? (
                    videoArrayTitles.map((title) => (
                      <div
                        className="track-button"
                        onClick={() =>
                          setVideoArrayPointer(videoArrayTitles.indexOf(title))
                        }
                      >
                        <p className="trackid">
                          {videoArrayTitles.indexOf(title)}
                        </p>
                        <p className="tracktitle">{title}</p>
                        {/* {`${videoArrayTitles.indexOf(title)}. ${title}`} */}
                      </div>
                    ))
                  ) : (
                    <div>no videos</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>nos reulst</div>
        )}
      </div>
    </div>
  );
};

export default ResultDetail;
