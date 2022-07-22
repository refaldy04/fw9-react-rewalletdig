import React, { Component } from 'react';
import '../asset/css/login.css';
import { Link } from 'react-router-dom';

import phone from '../asset/img/Group 57.png';

export class Login extends Component {
  render() {
    return (
      <main class="row vh-100">
        <div class="col-md-7 fw-intro d-flex flex-column justify-content-center">
          <h1 class="fw-brand text-light">ZWALLET</h1>
          <figure class="figure text-center">
            <img src={phone} class="figure-img img-fluid rounded" alt="phone-1" />
          </figure>

          <h3 class="fw-motto text-light">App that Covering Banking Needs.</h3>
          <p class="text-light mt-5">
            Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
          </p>
        </div>
        <div class="col-md-5 fw-form d-flex flex-column">
          <h3 class="fw-motto fw-margin">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p class="fw-accessibility mt-4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          <div class="col-auto my-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Email
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <i data-feather="mail"></i>
              </div>
              <input type="email" class="form-control" placeholder="Enter your e-mail" />
            </div>
          </div>
          <div class="col-auto my-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Password
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <i data-feather="lock"></i>
              </div>
              <input type="password" class="form-control" placeholder="Enter your password" />
            </div>
          </div>
          <p class="mt-4 text-end fw-forgot-pw">
            <a href="reset-password-page-confirm-email.html">Forgot password?</a>
          </p>
          <a href="home-page.html">
            <div class="d-grid fw-button rounded">
              <Link as="button" to="/dashboard" class="btn" type="button">
                <span class="fw-login-btn">Login</span>
              </Link>
            </div>
          </a>
          <p class="my-5 text-center fw-signup">
            Don't have an account? Let's <a href="signup-page.html">Sign Up</a>
          </p>
        </div>
      </main>
    );
  }
}

export default Login;
