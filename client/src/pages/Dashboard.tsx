import React, { useState, useEffect } from 'react';

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
  Row,
  InputGroup,
  FormControl,
  Form
} from 'react-bootstrap';

import '../styles/Dashboard.css';
import { getSearchResults } from '../api/getSearchResults'
import ResultCard from '../components/ResultCard';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(()=> {
    // getSearchResults('hessle+audio', setSearchResults )
    console.log(searchResults);
    setSearchTerm('');
  },[])

  const handleUserInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };


  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    getSearchResults(searchTerm.replace(/ /g, '+'), setSearchResults);

    console.log(searchResults);
    setSearchTerm('');
  };

  return (
    <Container className="dashboard-container">
      <h1 className="dashboard-header">Search by label or Artist</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 search-bar">
          <FormControl
            placeholder="Search by label or artist"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={handleUserInput}
          />
          <Button
            variant="secondary"
            id="button-addon2"
            type="submit"
            style={{
              backgroundColor: '#69F0AE',
              border: '#69F0AE',
            }}
          >
            Search
          </Button>
        </InputGroup>
      </form>
      <div className="dashboard-recommendation">
        <div>
          <div className="divider"></div>
          <div className="search-results">
            {searchResults ? (
              searchResults.map((result) => (
                  <ResultCard id={result.id} title={result.title} cover_image={result.cover_image} />
              ))
            ) : <div>nos reulst</div>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;