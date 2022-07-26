import React, { Component } from 'react';

export class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown d-lg-none d-block">
        <button className="fw9-btn-menu text-light btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item active" href="facebook.com" aria-current="true">
              Dashboard
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="facebook.com">
              Transfer
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="facebook.com">
              Top Up
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="facebook.com">
              Profile
            </a>
          </li>
          <hr />
          <li>
            <a className="dropdown-item" href="facebook.com">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
