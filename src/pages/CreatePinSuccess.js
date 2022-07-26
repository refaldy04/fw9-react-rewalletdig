import React, { Component } from 'react';
import '../asset/css/create-pin-success.css';
import Intro from '../component/Intro';
import { Link } from 'react-router-dom';

import check from '../asset/img/check.png';

export class CreatePinSuccess extends Component {
  render() {
    return (
      <section class="row">
        <Intro />

        <div class="col-md-5 fw-form d-flex flex-column fw-create-pin fw-confirmation gap-5">
          <div class="d-flex fw-check justify-content-center align-items-center rounded-circle">
            <img src={check} alt="Success" />
          </div>
          <h3 class="fw-bold fs-5">Your PIN Was Successfully Created</h3>
          <p>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>

          <div class="d-grid fw-button rounded">
            <Link to="/dashboard" class="btn text-light fw-bold" type="button">
              Login Now
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default CreatePinSuccess;
