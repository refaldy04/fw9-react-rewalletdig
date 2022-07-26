import React, { Component } from 'react';
import Intro from '../component/Intro';
import '../asset/css/signup.css';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  render() {
    return (
      <section class="row">
        <Intro />

        <div class="col-md-5 fw-form d-flex flex-column">
          <h3 class="fw-motto fw-margin">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p class="fw-accessibility mt-4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          <div class="col-auto mt-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <i data-feather="user"></i>
              </div>
              <input type="text" class="form-control" placeholder="Enter your username" />
            </div>
          </div>
          <div class="col-auto mt-3">
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
          <div class="col-auto mt-3">
            <label class="visually-hidden" for="autoSizingInputGroup">
              Password
            </label>
            <div class="input-group">
              <div class="input-group-text">
                <i data-feather="lock"></i>
              </div>
              <input type="password" class="form-control" placeholder="Create your password" />
            </div>
          </div>

          <div class="d-grid fw-button rounded">
            <Link to="/create-pin" class="btn text-light fs-bold" type="button">
              <span>Sign Up</span>
            </Link>
          </div>

          <p class="my-2 text-center fw-signup">
            Already have an account? Let's <a href="login-page.html">Login</a>
          </p>
        </div>
      </section>
    );
  }
}

export default SignUp;
