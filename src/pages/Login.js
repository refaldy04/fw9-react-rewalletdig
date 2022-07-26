import React, { Component } from 'react';
import '../asset/css/login.css';
import FormInput from '../component/FormLogin';
import Intro from '../component/Intro';

export class Login extends Component {
  render() {
    return (
      <section className="row d-flex vh-100">
        <Intro />

        <div className="col-md-5 fw-form d-flex flex-column">
          <h3 className="fw-motto fw-margin">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="fw-accessibility mt-4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

          <FormInput />

          <p className="my-5 text-center fw-signup">
            Don't have an account? Let's <a href="signup-page.html">Sign Up</a>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
