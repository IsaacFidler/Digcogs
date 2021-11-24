// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>{
        dispatch(logout())
        logout({
          returnTo: window.location.origin,
        })
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
