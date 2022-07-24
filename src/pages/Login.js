import React, { Component } from 'react';
import '../asset/css/login.css';
// import { Link } from 'react-router-dom';
import BasicExample from '../component/Form';

import phone from '../asset/img/Group 57.png';

export class Login extends Component {
  render() {
    return (
      <section className="row d-flex vh-100">
        <div className="col-md-7 fw-intro d-flex flex-column justify-content-center">
          <h1 className="fw-brand text-light">ZWALLET</h1>
          <figure className="figure text-center">
            <img src={phone} className="figure-img img-fluid rounded" alt="phone-1" />
          </figure>

          <h3 className="fw-motto text-light">App that Covering Banking Needs.</h3>
          <p className="text-light mt-5">
            Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
          </p>
        </div>
        <div className="col-md-5 fw-form d-flex flex-column">
          <h3 className="fw-motto fw-margin">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="fw-accessibility mt-4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

          <BasicExample />

          {/* <div className="col-auto my-3">
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Email
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <i data-feather="mail"></i>
              </div>
              <input type="email" className="form-control" placeholder="Enter your e-mail" />
            </div>
          </div>
          <div className="col-auto my-3">
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Password
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <i data-feather="lock"></i>
              </div>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
          </div>
          <p className="mt-4 text-end fw-forgot-pw">
            <a href="facebook.com">Forgot password?</a>
          </p>
          <Link to="/dashboard" href="home-page.html">
            <div className="d-grid fw-button rounded">
              <button className="btn" type="button">
                <span className="fw-login-btn">Login</span>
              </button>
            </div>
          </Link> */}
          <p className="my-5 text-center fw-signup">
            Don't have an account? Let's <a href="signup-page.html">Sign Up</a>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
