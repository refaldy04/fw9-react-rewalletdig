import React, { Component } from 'react';
import '../asset/css/top-up.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Menu from '../component/Menu';
import Dropdown from '../component/Dropdown';

export class TopUp extends Component {
  render() {
    return (
      <>
        <Navbar />

        <main>
          <Dropdown />

          <div className="d-flex gap-3">
            <Menu />

            <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column gap-4 bg-light rounded-4 fw9-input-amount">
              <p className="transfer-header">How To Top Up</p>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>1 </span> Go to the nearest ATM or you can use E-Banking.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>2 </span> Type your security number on the ATM or E-Banking.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>3 </span> Select “Transfer” in the menu
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>4 </span> Type the virtual account number that we provide you at the top.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>5 </span> Type the amount of the money you want to top up.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>6 </span> Read the summary details
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>7 </span> Press transfer / top up
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2 fw9-detail">
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">
                    <span>8 </span> You can see your money in Zwallet within 3 hours.
                  </h5>
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

export default TopUp;
