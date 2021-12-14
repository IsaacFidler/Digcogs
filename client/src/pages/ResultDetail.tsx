import React, { useState, useEffect } from 'react';

import {
  Container
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import ResultCard from '../components/ResultCard';

import { getResultVideos } from '../api/getResultVideos';

const ResultDetail = () => {
  const { id } = useParams();
  //need to write interface for object coming from discogs api
  const [releases, setReleases] = useState<any[]>([]);
  const [releaseIds, setReleaseIds] = useState<number[]>([]);

  useEffect(() => {
   getResultVideos(id, setReleases);

  }, []);

  useEffect(() => {
    setReleaseIds(releases.map((item)=>item.id))
    console.log(releaseIds);
    }, [releases]);

  return (
    <Container className="dashboard-container">
      <div className="search-results">
        {releaseIds ? <div>{releaseIds[0]}</div> : <div>nos reulst</div>}
      </div>
    </Container>
  );
};

export default ResultDetail;
