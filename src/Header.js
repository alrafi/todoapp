import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui container">
      <h1 className="ui header">To do App</h1>
      <div className="ui secondary pointing menu">
        <Link to="/" className="ui item">
          Home
        </Link>
        <Link to="/about" className="ui item">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
