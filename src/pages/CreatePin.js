import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../asset/css/create-pin.css';
import Intro from '../component/Intro';

export class CreatePin extends Component {
  render() {
    return (
      <section class="row">
        <Intro />

        <div class="col-md-5 fw-form d-flex flex-column fw-create-pin">
          <h3 class="fw-motto fw-margin">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p class="fw-accessibility mt-4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

          <div className="d-flex justify-content-center gap-3 fw9-input my-5">
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
          </div>

          <div class="d-grid fw-button rounded">
            <Link to="/create-pin-success" class="btn text-light fw-bold" type="button">
              Confirm
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default CreatePin;
