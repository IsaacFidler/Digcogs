import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashHeader from './DashHeader';
import { Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import background from '../assets/backgroundBlob.png';

import '../styles/SidebarHeader.css';
interface Props {}

export default function SIdebarHeader({}: Props): ReactElement {
  return (
    <div className="outer-container">
      <Image className="background" src={background} />

      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="header-search">
        <DashHeader />
      </div>
      <Outlet />
    </div>
  );
}
