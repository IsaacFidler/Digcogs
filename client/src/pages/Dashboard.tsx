import React, { useState, useEffect } from 'react';

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Form,
  Image,
} from 'react-bootstrap';

import background from '../assets/backgroundBlob.png';
import '../styles/Dashboard.css';
import { getSearchResults } from '../api/getSearchResults';
import ResultCard from '../components/ResultCard';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    // getSearchResults('hessle+audio', setSearchResults )
    console.log(searchResults);
    setSearchTerm('');
  }, []);

  const handleUserInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    getSearchResults(searchTerm.replace(/ /g, '+'), setSearchResults);

    console.log(searchResults);
    setSearchTerm('');
  };

  return (
    <div className="dashboard-containe">
      <Image className="background" src={background} />
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="header-dashboard">
          <div className="button-container">
            <Button
              className="history-button"
              as="input"
              type="button"
              value="<"
              style={{
                height: '35px',
                borderRadius: '20px',
                backgroundColor: '#212529',
                borderColor: '#212529',
              }}
            />
            <Button
              className="history-button2"
              as="input"
              type="button"
              value=">"
              style={{
                height: '35px',
                borderRadius: '20px',
                backgroundColor: '#212529',
                borderColor: '#212529',
              }}
            />
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <InputGroup className="mb-3 search-bar">
              <FormControl
                placeholder="Search by label or artist"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleUserInput}
                style={{
                  height: '35px',
                  borderRadius: '20px',
                  width: '200px',
                }}
              />
            </InputGroup>
          </form>
          <div className="userinfo-container"></div>
        </div>

        <div className="dashboard-recommendation">
          <div className="divider"></div>
          <div className="search-results">
            {searchResults ? (
              searchResults.map((result) => (
                <ResultCard
                  id={result.id}
                  title={result.title}
                  cover_image={result.cover_image}
                />
              ))
            ) : (
              <div>nos reulst</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
