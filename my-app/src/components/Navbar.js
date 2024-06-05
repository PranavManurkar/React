
import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="navbar-left">Patient Name: </div>
      <div className="navbar-right">
        <select className="dropdown">
          <option>Past Reports</option>
          <option>Report 1</option>
          <option>Report 2</option>
          <option>Report 3</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
