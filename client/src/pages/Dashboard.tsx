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
} from 'react-bootstrap';

import '../styles/Dashboard.css';
import { getSearchResults } from '../api/getSearchResults';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=> {
    getSearchResults('hessle+audio', setSearchResults )
    console.log(searchResults)
  },[])
  return (
    <Container className="dashboard-container">
      <h1 className="dashboard-header">Search by label or Artist</h1>
      <InputGroup className="mb-3 search-bar">
        <FormControl
          placeholder="Search by label or artist"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="secondary"
          id="button-addon2"
          style={{
            backgroundColor: '#69F0AE',
            border: '#69F0AE',
          }}
        >
          Search
        </Button>
      </InputGroup>
      <div className="dashboard-recommendation">
        <div>
          <div className="divider"></div>
        </div>
        <h1 className="recommendation-header">Search by label or Artist</h1>
      </div>
    </Container>
  );
};

export default Dashboard;