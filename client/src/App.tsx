import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth0ProviderWithHistory from './auth0provider';


//components

import Header from './components/Header'

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Header/>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
