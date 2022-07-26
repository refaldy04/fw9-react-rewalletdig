import React, { Component } from 'react';
import profile from '../asset/img/robert.png';

export class Navbar extends Component {
  render() {
    return (
      <nav className="fw9-navbar">
        <div className="row d-flex justify-content-between navbar">
          <h1 className="fw9-brand col-lg-6 mb-5 mb-lg-0">RE-WALLET</h1>
          <div className="d-flex gap-3 align-items-start col-lg-6 justify-content-lg-end">
            <img src={profile} className="img-fluid fw9-profile-pict" alt="profile" />
            <div className="d-flex flex-column justify-content-end">
              <h4 className="fw9-name-user d-flex">Robert Chandler</h4>
              <p>+62 8139 3877 7946</p>
            </div>
            <div className="d-flex fw9-bell">
              <i data-feather="bell"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
