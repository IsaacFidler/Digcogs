import React from 'react';
import logo from '../assets/LogoNoText.png';
// import background from '../assets/backgroundBlob.png';
import background from '../assets/mainBackground.png';
import mockup from '../assets/mockup3d.png';
import Header from '../components/Header';

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
      <Header />
      <div className="top-block"></div>
      <Container className="home-contents">
        <Image className="logoBig" src={logo} />
        <h1 className="welcome-text">
          Digcogs is a new way to dig through the world's biggest vinyl
          catalogue - Discogs. Explore the discographies of the best artists and
          labels and discover new music for your collection.
        </h1>
        <Image className="mockup" src={mockup} />
        <Row></Row>
      </Container>
      {/* <div className = 'info-container'>
        <Image className="second-page" src={background2} />
      </div> */}
    </Container>
  );
};

export default Home;
