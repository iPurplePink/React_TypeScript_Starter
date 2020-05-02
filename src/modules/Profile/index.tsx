import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile-section">
      <Link className="exit-link" to="/home">
        Exit Profile
      </Link>
    </section>
  );
}

export default Profile;
