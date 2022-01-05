import React, { ReactElement } from 'react'
import '../styles/Sidebar.css'
import logo from '../assets/digcogsLogoWhite.png';

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
  return (
    <div className="sidebar-container">
      <Image className="logo" src={logo} />
    </div>
  );
}
