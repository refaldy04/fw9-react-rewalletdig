import React, { Component } from 'react';
import '../asset/css/personal-info.css';
import Navbar from '../component/Navbar';
import Dropdown from '../component/Dropdown';
import Footer from '../component/Footer';

export class PersonalInformation extends Component {
  render() {
    return (
      <>
        <Navbar />

        <main>
          <Dropdown />

          <div className="d-flex gap-3">
            <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
              <div className="d-flex flex-column gap-5">
                <a href="home-page.html" className="d-flex gap-4 fw9-semibold">
                  <i data-feather="grid" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Dashboard</h3>
                </a>
                <a href="search-receiver-page.html" className="d-flex gap-4">
                  <i data-feather="arrow-up" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Transfer</h3>
                </a>
                <a href="top-up-page.html" className="d-flex gap-4">
                  <i data-feather="arrow-down" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Top Up</h3>
                </a>
                <a href="profile-1-page.html" className="d-flex gap-4">
                  <i data-feather="user" className="fw9-menu-active"></i>
                  <h3 className="fw9-menu-active">Profile</h3>
                </a>
              </div>
              <div>
                <div className="d-flex gap-4">
                  <i data-feather="log-out" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Log Out</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column gap-2 bg-light rounded-4 fw9-input-amount">
              <h4>Personal Information</h4>
              <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
              <div>
                <div className="flex flex-column bg-light container">
                  <h5 className="key">First Name</h5>
                  <h2 className="value">Robert</h2>
                </div>
                <div className="flex flex-column bg-light container">
                  <h5 className="key">Last Name</h5>
                  <h2 className="value">Chandler</h2>
                </div>
                <div className="flex flex-column bg-light container">
                  <h5 className="key">Verified E-mail</h5>
                  <h2 className="value">pewdiepie1@gmail.com</h2>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between bg-light container">
                  <div>
                    <h5 className="key">Phone Number</h5>
                    <h2 className="value">+62 813-9387-7946</h2>
                  </div>
                  <a href="manage-phone-number-page.html">Manage</a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default PersonalInformation;
