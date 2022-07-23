import React, { Component } from 'react';
import '../asset/css/search-receiver.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import profile from '../asset/img/robert.png';
import samuel from '../asset/img/David.png';
import mellisa from '../asset/img/2.png';
import jessica from '../asset/img/1.png';
import michael from '../asset/img/Rectangle-25.png';

import { FiSearch } from 'react-icons/fi';

export class SearchReceiver extends Component {
  render() {
    return (
      <>
        <nav className="fw9-navbar">
          <div className="row d-flex justify-content-between container">
            <h1 className="fw9-brand col-lg-6 mb-5 mb-lg-0">ZWALLET</h1>
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
        <main>
          <div className="dropdown d-lg-none d-block">
            <button className="fw9-btn-menu btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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

          <div className="d-flex gap-3">
            <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
              <div className="d-flex flex-column gap-5">
                <a href="home-page.html" className="d-flex gap-4 fw9-semibold">
                  <i data-feather="grid" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Dashboard</h3>
                </a>
                <a href="search-receiver-page.html" className="d-flex gap-4">
                  <i data-feather="arrow-up" className="fw9-menu-active"></i>
                  <h3 className="fw9-menu-active">Transfer</h3>
                </a>
                <a href="top-up-page.html" className="d-flex gap-4">
                  <i data-feather="arrow-down" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Top Up</h3>
                </a>
                <a href="profile-1-page.html" className="d-flex gap-4">
                  <i data-feather="user" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Profile</h3>
                </a>
              </div>
              <div>
                <div className="d-flex gap-4">
                  <i data-feather="log-out" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Log Out</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column gap-4 bg-light rounded-4 fw9-search-receiver">
              <p>Search Receiver</p>
              <Form className="mb-5">
                <Form.Group>
                  {/* <span className="input-group-text fw9-input-search" id="addon-wrapping">
                    <FiSearch />
                  </span> */}
                  <Form.Control type="text" className=" fw9-input-search" placeholder={<FiSearch /> + `Search receiver here`} aria-label="Username" aria-describedby="addon-wrapping" />
                </Form.Group>
              </Form>

              <div className="d-flex flex-column gap-5 mt-4 mt-xl-0">
                <Link to="/" className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                  <a href="input-amount-page.html" className="d-flex align-items-start gap-2 user">
                    <img src={samuel} alt="Samuel" className="img-fluid" />
                    <div className="d-flex flex-column justify-content-between">
                      <h5 className="name-history">Samuel Suhi</h5>
                      <p className="type-history">+62 813-8492-9994</p>
                    </div>
                  </a>
                </Link>
                <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                  <div className="d-flex align-items-start gap-2">
                    <img src={mellisa} alt="mellisa" className="img-fluid" />
                    <div className="d-flex flex-column justify-content-between">
                      <h5 className="name-history">Mellisa Chen</h5>
                      <p className="type-history">+62 812-4343-6731</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                  <div className="d-flex align-items-start gap-2">
                    <img src={jessica} alt="jessica" className="img-fluid" />
                    <div className="d-flex flex-column justify-content-between">
                      <h5 className="name-history">Jessica Keen</h5>
                      <p className="type-history">+62 811-3452-5252</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                  <div className="d-flex align-items-start gap-2">
                    <img src={michael} alt="michael" className="img-fluid" />
                    <div className="d-flex flex-column justify-content-between">
                      <h5 className="name-history">Michael Le</h5>
                      <p className="type-history">+62 810-4224-4613</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="d-flex flex-column flex-lg-row justify-content-lg-between">
          <p>2020 Zwallet. All right reserved.</p>
          <div className="d-flex gap-lg-5 flex-column flex-lg-row">
            <p>+62 5637 8882 9901</p>
            <p>contact@zwallet.com</p>
          </div>
        </footer>
      </>
    );
  }
}

export default SearchReceiver;
