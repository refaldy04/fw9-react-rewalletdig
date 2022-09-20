import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import '../asset/css/profile-2.css';
// import Menu from '../component/Menu';
import Dropdown from '../component/Dropdown';
import User from '../asset/img/8bigger.png';
import Pencil from '../asset/img/edit-2.png';
import ArrowLeft from '../asset/img/arrow-left.png';
import Samuel from '../asset/img/David.png';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
// import { Button } from 'bootstrap';

export class Profile extends Component {
  componentDidMount() {
    localStorage.setItem('auth', 'hello');
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <Button className="btn btn-success text-dark fw-bold" onClick={() => localStorage.setItem('auth', 'hello')}>
          Click me
        </Button> */}
        <main>
          <Dropdown />

          <div className="d-flex gap-3">
            <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
              <div className="d-flex flex-column gap-5">
                <Link to="/dashboard" className="d-flex gap-4 fw9-semibold">
                  <i data-feather="grid" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Dashboard</h3>
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
                  <i data-feather="user" className="fw9-menu-active"></i>
                  <h3 className="fw9-menu-active fw-bold">Profile</h3>
                </Link>
              </div>
              <div>
                <Link to="/login" onClick={this.onLogout} className=" d-flex gap-4">
                  <i data-feather="log-out" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Log Out</h3>
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-12 mt-5 mt-lg-0  d-flex flex-column gap-2">
              <div className="bg-light rounded-4 fw9-main d-flex flex-column gap-4">
                <img src={User} alt="profile" className="img-fluid mx-auto" />
                <a href="facebook.com" className="d-flex mx-auto gap-1 align-items-start">
                  <img src={Pencil} alt="edit" className="img-fluid mx-auto mt-2" />
                  <p className="text-secondary text-edit">Edit</p>
                </a>
                <div className="mx-auto">
                  <h3 className="text-center fw9-fullname">Robert Chandler</h3>
                  <p className="text-center fw9-phone">+62 813-9387-7946</p>
                </div>
              </div>

              <div className="d-flex gap-2 flex-column flex-lg-row">
                <div className="d-flex flex-column col-lg-7 bg-light fw9-container-menu">
                  <div className="d-flex flex-column align-items-center gap-3">
                    <Link to="/personal-information" className="fw9-profile-menu d-flex justify-content-between rounded-4 mx-auto">
                      <p>Personal Information</p>
                      <img src={ArrowLeft} alt="next" className="img-fluid" />
                    </Link>
                    <Link to="/change-password" className="fw9-profile-menu d-flex justify-content-between rounded-4 mx-auto">
                      <p>Change Password</p>
                      <img src={ArrowLeft} alt="next" className="img-fluid" />
                    </Link>
                    <Link to="/change-pin" className="fw9-profile-menu d-flex justify-content-between rounded-4 mx-auto">
                      <p>Change PIN</p>
                      <img src={ArrowLeft} alt="next" className="img-fluid" />
                    </Link>
                    <div className="fw9-profile-menu d-flex justify-content-between rounded-4 mx-auto">
                      <p>Logout</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column col-lg-5 bg-light fw9-contact-list">
                  <div className="d-flex justify-content-between">
                    <p className="title">Contacts Info</p>
                    <a href="facebook.com">See all</a>
                  </div>
                  <div className="mt-4 d-flex flex-column gap-5">
                    <div className="d-flex justify-content-start align-items-start gap-2 fw9-user">
                      <img src={Samuel} alt="pict profile" className="img-fluid" />
                      <div>
                        <p className="name">Samuel Suhi</p>
                        <p className="phone">+62 8371-1010-2732</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start gap-2 fw9-user">
                      <img src={Samuel} alt="pict profile" className="img-fluid" />
                      <div>
                        <p className="name">Samuel Suhi</p>
                        <p className="phone">+62 8371-1010-2732</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start gap-2 fw9-user">
                      <img src={Samuel} alt="pict profile" className="img-fluid" />
                      <div>
                        <p className="name">Samuel Suhi</p>
                        <p className="phone">+62 8371-1010-2732</p>
                      </div>
                    </div>
                  </div>
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

export default Profile;
