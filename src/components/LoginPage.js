import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>

      <h2>Get Started</h2>
      <ol>
        <li><Link to="fuel-savings">Test fuel-savings</Link></li>
        <li>Holla Holla Dolla Dolla</li>
      </ol>
    </div>
  );
};

export default LoginPage;
