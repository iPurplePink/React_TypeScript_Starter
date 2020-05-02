import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile-section">
      <h1>Done viewing your profile?</h1>
      <Link className="exit-link" to="/logout-callback">
        <h1>Sign out</h1>
      </Link>
    </section>
  );
}

export default Profile;
