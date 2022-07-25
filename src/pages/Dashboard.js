import React, { Component } from 'react';
import '../asset/css/home-page.css';

import profile from '../asset/img/robert.png';
import graphic from '../asset/img/graphic.png';
import { Link } from 'react-router-dom';
import samuel from '../asset/img/David.png';
import netflix from '../asset/img/netflix.png';
import christine from '../asset/img/2.png';
import adobe from '../asset/img/adobe.png';

class Card extends Component {
  render() {
    return (
      <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
        <div className="d-flex align-items-start gap-2">
          <img src={this.props.img} alt="" className="img-fluid" />
          <div className="d-flex flex-column justify-content-between">
            <h5 className="name-history">{this.props.name}</h5>
            <p className="type-history">{this.props.type}</p>
          </div>
        </div>
        <h3 className="amount-history">{this.props.amount}</h3>
      </div>
    );
  }
}
class CardMinus extends Component {
  render() {
    return (
      <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
        <div className="d-flex align-items-start gap-2">
          <img src={this.props.img} alt="" className="img-fluid" />
          <div className="d-flex flex-column justify-content-between">
            <h5 className="name-history">{this.props.name}</h5>
            <p className="type-history">{this.props.type}</p>
          </div>
        </div>
        <h3 className="amount-history minus">{this.props.amount}</h3>
      </div>
    );
  }
}

export class Dashboard extends Component {
  render() {
    return (
      <>
        <nav className="fw9-navbar">
          <div className="row d-flex justify-content-between navbar">
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

          <div className="row">
            <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
              <div className="d-flex flex-column gap-5">
                <Link to="/" className="d-flex gap-4 fw9-semibold">
                  <i data-feather="grid" className="fw9-menu-active"></i>
                  <h3 className="fw9-menu-active">Dashboard</h3>
                </Link>
                <Link to="/search-receiver" className="d-flex gap-4">
                  <i data-feather="arrow-up" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Transfer</h3>
                </Link>
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
                <a href="facebook.com" className="d-flex gap-4">
                  <i data-feather="log-out" className="fw9-menu"></i>
                  <h3 className="fw9-menu">Log Out</h3>
                </a>
              </div>
            </div>

            <div className="col-lg-9 mt-5 mt-lg-0 d-flex flex-column gap-2">
              <div className="d-flex justify-content-between fw9-balance flex-column flex-lg-row">
                <div>
                  <h5 className="text-light">Balance</h5>
                  <h1 className="text-light">Rp120.000</h1>
                  <p className="text-light">+62 813-9387-7946</p>
                </div>
                <div className="d-flex flex-column gap-3">
                  <button type="button" className="btn btn-outline-secondary fw9-transaction">
                    <i data-feather="arrow-up" className="fw9-menu"></i> Transfer
                  </button>
                  <button type="button" className="btn btn-outline-secondary fw9-transaction">
                    <i data-feather="plus" className="fw9-menu"></i> Top Up
                  </button>
                </div>
              </div>

              <div className="d-flex gap-2 flex-column flex-lg-row">
                <div className="fw9-diagram d-flex flex-column col-lg-7 rounded justify-content-between">
                  <div className="d-flex flex-column flex-lg-row gap-sm-4 gap-lg-0 justify-content-between">
                    <div className="d-flex flex-column">
                      <i data-feather="arrow-up" className="text-success"></i>
                      <p>Income</p>
                      <h2 className="fs-5">Rp2.120.000</h2>
                    </div>
                    <div className="d-flex flex-column">
                      <i data-feather="arrow-down" className="text-danger"></i>
                      <p>Expense</p>
                      <h2 className="fs-5">Rp1.560.000</h2>
                    </div>
                  </div>
                  <div className="text-center mt-sm-4 mt-lg-0">
                    <img src={graphic} className="img-fluid" alt="graphic" />
                  </div>
                </div>

                <div className="fw9-history d-flex flex-column col-lg-5 rounded">
                  <div className="d-flex flex-row justify-content-between">
                    <p className="transaction-history">Transaction History</p>
                    <a href="history-page.html" className="see-all-transaction">
                      See all
                    </a>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <Card img={samuel} name="Samuel Suhi" type="Transfer" amount="+Rp50.000" />
                    <CardMinus img={netflix} name="Netflix" type="Subscription" amount="-Rp149.000" />
                    <Card img={christine} name="Christine Mar..." type="Transfer" amount="+Rp150.000" />
                    <CardMinus img={adobe} name="Adobe Inc." type="Subscription" amount="-Rp249.000" />
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

export default Dashboard;
