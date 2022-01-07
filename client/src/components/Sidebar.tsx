import React, { ReactElement, useEffect } from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/digcogsLogoWhite.png';
import {
  HouseDoorFill,
  EyeFill,
  HeartFill,
  Search,
} from 'react-bootstrap-icons';

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Form,
  Image,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    const currentURL = window.location.pathname;

    console.log(currentURL);
  }, []);

  const handleClick = (navigationURI: string) => {
    return (event: React.MouseEvent) => {
      navigate(`/${navigationURI}`, { replace: true });
      event.preventDefault();
    };
  };

  return (
    <div className="sidebar-container">
      <Image
        className="sidebar-logo"
        src={logo}
        onClick={handleClick('dashboard')}
      />
      <div className="section-buttons">
        <div
          className="home-button side-button"
          onClick={handleClick('dashboard/home')}
        >
          <p
            className="textt"
            style={{
              opacity:
                window.location.pathname == '/dashboard/home' ? '1' : '0.3',
            }}
          >
            <div className="icon">
              <HouseDoorFill />
            </div>
            Home
          </p>
        </div>
        <div
          className="search-button side-button hello"
          onClick={handleClick('dashboard/search')}
        >
          <p
            className="textt"
            style={{
              opacity:
                window.location.pathname == '/dashboard/search' ? '1' : '0.3',
            }}
          >
            <div className="icon">
              <Search />
            </div>
            Search
          </p>
        </div>
        <div className="wantlist-button side-button">
          <p
            className="textt"
            style={{
              opacity:
                window.location.pathname == '/dashboard/wantlist' ? '1' : '0.3',
            }}
          >
            <div className="icon">
              <EyeFill />
            </div>
            Wantlist
          </p>
        </div>
        <div className="favourite-button side-button">
          <p
            className="textt"
            style={{
              opacity:
                window.location.pathname == '/dashboard/favourite'
                  ? '1'
                  : '0.3',
            }}
          >
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
