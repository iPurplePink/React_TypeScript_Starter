import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-section">
      <h1>Start exploring your profile!</h1>
      <Link className="explore-link" to="/login-callback">
        <h1>Sign in</h1>
      </Link>
    </section>
  );
}

export default Home;
