import React from 'react';

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

const Dashboard = () => {
  return (
    <Container className ="dashboard-container">
      <h1 className="dashboard-header">Search by label or Artist</h1>
      <InputGroup className="mb-3 search-bar">
        <FormControl
          placeholder="Search by label or artist"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="secondary"
          id="button-addon2"
          style={{
            backgroundColor: '#69F0AE',
            border: '#69F0AE',
          }}
        >
          Button
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Dashboard;