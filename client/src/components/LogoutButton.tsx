// src/components/logout-button.js
import {
  Button,
} from 'react-bootstrap';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth';
import { Link, useHistory } from 'react-router-dom';


const LogoutButton = () => {

  const history = useHistory();
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();


  async function logoutDiscogs() {
    let response = await fetch('http://localhost:9000/logout');
    dispatch(logout());
    history.push(`/`);
  }

  return (
    <Button
      variant="outline-primary"
      className="btn logout-button"
      style={{
        color: '#69F0AE',
        borderColor: '#69F0AE',
      }}
      onClick={() => {
        logoutDiscogs()
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
