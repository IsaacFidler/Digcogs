import React, { ReactElement, useEffect } from 'react'
import '../styles/Sidebar.css'
import logo from '../assets/digcogsLogoWhite.png';
import { HouseDoorFill, EyeFill, HeartFill} from 'react-bootstrap-icons';

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Form,
  Image,
} from 'react-bootstrap';

interface Props {

}


export default function Sidebar({}: Props): ReactElement {

  useEffect(()=> {
  const currentURL = window.location.pathname

  console.log(currentURL)
  }, [])

  return (
    <div className="sidebar-container">
      <Image className="logo" src={logo} />
      <div className="section-buttons">
        <div
          className="home-button side-button"
          style={{
            color:
              window.location.pathname == '/dashboard' ? 'white' : '#6C6C6C',
            backgroundColor:
              window.location.pathname == '/dashboard' ? '#2B353A' : '#212529',
          }}
        >
          <p className="textt">
            <div className="icon">
              <HouseDoorFill />
            </div>
            Home
          </p>
        </div>
        <div
          className="wantlist-button side-button"
          style={{
            color:
              window.location.pathname == '/wantlist' ? 'white' : '#6C6C6C',
          }}
        >
          <p className="textt">
            <div className="icon">
              <EyeFill />
            </div>
            Wantlist
          </p>
        </div>
        <div
          className="favourite-button side-button"
          style={{
            color:
              window.location.pathname == '/favourite' ? 'white' : '#6C6C6C',
          }}
        >
          <p className="textt">
            <div className="icon">
              <HeartFill />
            </div>
            Favourite
          </p>
        </div>
      </div>
    </div>
  );
}
