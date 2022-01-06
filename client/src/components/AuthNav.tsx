// src/components/auth-nav.js

import React from 'react';
import AuthenticationButton from './AuthenticationButton';

const AuthNav = () => {
  return (
    <div className="navbar-nav ml-auto">
      <AuthenticationButton />
    </div>
  );
};

export default AuthNav;
