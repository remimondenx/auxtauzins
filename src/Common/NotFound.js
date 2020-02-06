import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/other/not_found.jpg';
const NotFound = () => (
  <div>
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      Oups ! La page que vous recherchez n'existe pas.
    </div>
    <img
      alt="404"
      src={PageNotFound}
      style={{
        display: 'block',
        margin: '50px auto',
        position: 'relative',
      }}
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
