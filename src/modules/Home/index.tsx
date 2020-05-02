import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-section">
      <Link className="explore-link" to="/profile">
        Explore Profile
      </Link>
    </section>
  );
}

export default Home;
