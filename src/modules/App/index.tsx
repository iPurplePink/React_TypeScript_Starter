import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Checkout The Routes</p>
        <Link className="App-link" to="/login">
          Visit Login
        </Link>
      </header>
    </div>
  );
}

export default App;
