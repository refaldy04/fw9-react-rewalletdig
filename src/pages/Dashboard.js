import React, { Component } from 'react';
import '../asset/css/home-page.css';

import profile from '../asset/img/robert.png';
import graphic from '../asset/img/graphic.png';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <nav class="fw9-navbar">
          <div class="row d-flex justify-content-between navbar">
            <h1 class="fw9-brand col-lg-6 mb-5 mb-lg-0">ZWALLET</h1>
            <div class="d-flex gap-3 align-items-start col-lg-6 justify-content-lg-end">
              <img src={profile} class="img-fluid fw9-profile-pict" alt="profile" />
              <div class="d-flex flex-column justify-content-end">
                <h4 class="fw9-name-user d-flex">Robert Chandler</h4>
                <p>+62 8139 3877 7946</p>
              </div>
              <div class="d-flex fw9-bell">
                <i data-feather="bell"></i>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div class="dropdown d-lg-none d-block">
            <button class="fw9-btn-menu btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item active" href="#" aria-current="true">
                  Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Transfer
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Top Up
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>

          <div class="row">
            <div class="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
              <div class="d-flex flex-column gap-5">
                <a href="home-page.html" class="d-flex gap-4 fw9-semibold">
                  <i data-feather="grid" class="fw9-menu-active"></i>
                  <h3 class="fw9-menu-active">Dashboard</h3>
                </a>
                <Link to="/search-receiver" class="d-flex gap-4">
                  <i data-feather="arrow-up" class="fw9-menu"></i>
                  <h3 class="fw9-menu">Transfer</h3>
                </Link>
                <a href="top-up-page.html" class="d-flex gap-4">
                  <i data-feather="arrow-down" class="fw9-menu"></i>
                  <h3 class="fw9-menu">Top Up</h3>
                </a>
                <a href="profile-1-page.html" class="d-flex gap-4">
                  <i data-feather="user" class="fw9-menu"></i>
                  <h3 class="fw9-menu">Profile</h3>
                </a>
              </div>
              <div>
                <a href="" class="d-flex gap-4">
                  <i data-feather="log-out" class="fw9-menu"></i>
                  <h3 class="fw9-menu">Log Out</h3>
                </a>
              </div>
            </div>

            <div class="col-lg-9 mt-5 mt-lg-0 d-flex flex-column gap-2">
              <div class="d-flex justify-content-between fw9-balance flex-column flex-lg-row">
                <div>
                  <h5 class="text-light">Balance</h5>
                  <h1 class="text-light">Rp120.000</h1>
                  <p class="text-light">+62 813-9387-7946</p>
                </div>
                <div class="d-flex flex-column gap-3">
                  <button type="button" class="btn btn-outline-secondary fw9-transaction">
                    <i data-feather="arrow-up" class="fw9-menu"></i> Transfer
                  </button>
                  <button type="button" class="btn btn-outline-secondary fw9-transaction">
                    <i data-feather="plus" class="fw9-menu"></i> Top Up
                  </button>
                </div>
              </div>

              <div class="d-flex gap-2 flex-column flex-lg-row">
                <div class="fw9-diagram d-flex flex-column col-lg-7 rounded justify-content-between">
                  <div class="d-flex flex-column flex-lg-row gap-sm-4 gap-lg-0 justify-content-between">
                    <div class="d-flex flex-column">
                      <i data-feather="arrow-up" class="text-success"></i>
                      <p>Income</p>
                      <h2 class="fs-5">Rp2.120.000</h2>
                    </div>
                    <div class="d-flex flex-column">
                      <i data-feather="arrow-down" class="text-danger"></i>
                      <p>Expense</p>
                      <h2 class="fs-5">Rp1.560.000</h2>
                    </div>
                  </div>
                  <div class="text-center mt-sm-4 mt-lg-0">
                    <img src={graphic} class="img-fluid" alt="graphic" />
                  </div>
                </div>

                <div class="fw9-history d-flex flex-column col-lg-5 rounded">
                  <div class="d-flex flex-row justify-content-between">
                    <p class="transaction-history">Transaction History</p>
                    <a href="history-page.html" class="see-all-transaction">
                      See all
                    </a>
                  </div>

                  <div class="d-flex flex-column gap-3">
                    <div class="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                      <div class="d-flex align-items-start gap-2">
                        <img src="asset/img/David.png" alt="" class="img-fluid" />
                        <div class="d-flex flex-column justify-content-between">
                          <h5 class="name-history">Samuel Suhi</h5>
                          <p class="type-history">Transfer</p>
                        </div>
                      </div>
                      <h3 class="amount-history">+Rp50.000</h3>
                    </div>
                    <div class="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                      <div class="d-flex align-items-start gap-2">
                        <img src="asset/img/netflix.png" alt="" class="img-fluid" />
                        <div class="d-flex flex-column justify-content-between">
                          <h5 class="name-history">Netflix</h5>
                          <p class="type-history">Subscription</p>
                        </div>
                      </div>
                      <h3 class="amount-history minus">-Rp149.000</h3>
                    </div>
                    <div class="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                      <div class="d-flex align-items-start gap-2">
                        <img src="asset/img/2.png" alt="" class="img-fluid" />
                        <div class="d-flex flex-column justify-content-between">
                          <h5 class="name-history">Christine Mar...</h5>
                          <p class="type-history">Transfer</p>
                        </div>
                      </div>
                      <h3 class="amount-history">+Rp150.000</h3>
                    </div>
                    <div class="d-flex align-items-start justify-content-between flex-column flex-xl-row">
                      <div class="d-flex align-items-start gap-2">
                        <img src="asset/img/adobe.png" alt="" class="img-fluid" />
                        <div class="d-flex flex-column justify-content-between">
                          <h5 class="name-history">Adobe Inc.</h5>
                          <p class="type-history">Subscription</p>
                        </div>
                      </div>
                      <h3 class="amount-history minus">-Rp249.000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="d-flex flex-column flex-lg-row justify-content-lg-between">
          <p>2020 Zwallet. All right reserved.</p>
          <div class="d-flex gap-lg-5 flex-column flex-lg-row">
            <p>+62 5637 8882 9901</p>
            <p>contact@zwallet.com</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Dashboard;
