import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
        <div className="d-flex flex-column gap-5">
          <Link to="/dashboard" className="d-flex gap-4 fw9-semibold">
            <i data-feather="grid" className="fw9-menu-active"></i>
            <h3 className="fw9-menu-active">Dashboard</h3>
          </Link>
          <Link to="/search-receiver" className="d-flex gap-4">
            <i data-feather="arrow-up" className="fw9-menu"></i>
            <h3 className="fw9-menu">Transfer</h3>
          </Link>
          <Link to="/top-up" href="top-up-page.html" className="d-flex gap-4">
            <i data-feather="arrow-down" className="fw9-menu"></i>
            <h3 className="fw9-menu">Top Up</h3>
          </Link>
          <Link to="/profile" className="d-flex gap-4">
            <i data-feather="user" className="fw9-menu"></i>
            <h3 className="fw9-menu">Profile</h3>
          </Link>
        </div>
        <div>
          <a href="facebook.com" className="d-flex gap-4">
            <i data-feather="log-out" className="fw9-menu"></i>
            <h3 className="fw9-menu">Log Out</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
