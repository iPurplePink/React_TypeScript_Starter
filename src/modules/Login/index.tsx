import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Checkout The Routes</p>
        <Link className="App-link" to="/">
          Visit App
        </Link>
      </header>
    </div>
  );
}

export default Login;
