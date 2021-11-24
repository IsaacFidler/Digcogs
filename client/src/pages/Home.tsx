import React from 'react';
import logo from '../assets/digcogsLogo.png';
import background from '../assets/background.jpeg';

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
  Row
} from 'react-bootstrap';
import '../styles/Home.css'

const Home = () => {
  return (
    <Container className="home-container">
      <Image className="background" src={background} />
      <Container className="home-contents">
        <Image className="logoBig" src={logo} />
        <h1 className="welcome-text">
          Digcogs is a new way to dig through the world's biggest vinyl catalogue
          - Discogs. Explore the discographies of the best artists and labels
          and discover new music for your collection.
        </h1>
        <Row></Row>
      </Container>
    </Container>
  );
};

export default Home;
