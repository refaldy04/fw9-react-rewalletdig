import React, { Component } from 'react';
import '../asset/css/home-page.css';
import Navbar from '../component/Navbar';
// import Menu from '../component/Menu';
import Dropdown from '../component/Dropdown';
import Footer from '../component/Footer';

import graphic from '../asset/img/graphic.png';
// import { Link } from 'react-router-dom';
import samuel from '../asset/img/David.png';
import netflix from '../asset/img/netflix.png';
import christine from '../asset/img/2.png';
import adobe from '../asset/img/adobe.png';
import { Link } from 'react-router-dom';
import { logout } from '../redux/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../redux/asyncActions/profile';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        success: true,
        message: 'List users',
        results: [
          {
            id: 1,
            name: 'Samuel Suhi',
            picture: samuel,
            type: 'Transfer',
            amount: 150000,
          },
          {
            id: 2,
            name: 'Netflix',
            picture: netflix,
            type: 'subscription',
            amount: 200000,
          },
          {
            id: 3,
            name: 'Christine Mar...',
            picture: christine,
            type: 'Transfer',
            amount: 50000,
          },
          {
            id: 4,
            name: 'Adobe Inc',
            picture: adobe,
            type: 'subscription',
            amount: 140000,
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        {this.state.data.results.map((user) => (
          <div key={user.id} className="d-flex flex-column mt-3">
            <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
              <div className="d-flex align-items-start gap-2">
                <img src={user.picture} alt="user" className="img-fluid" />
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">{user.name}</h5>
                  <p className="type-history">{user.type}</p>
                </div>
              </div>
              <h3 className="amount-history">{user.amount}</h3>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const profile = useSelector((state) => state.profile.data);
  console.log(profile);

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  React.useEffect(() => {
    dispatch(getProfile(token));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Dropdown />

        <div className="row">
          <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
            <div className="d-flex flex-column gap-5">
              <Link to="/dashboard" className="d-flex gap-4 fw9-semibold">
                <i data-feather="grid" className="fw9-menu-active"></i>
                <h3 className="fw9-menu-active fw-bold">Dashboard</h3>
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
                <h3 className="fw9-menu">Profile</h3>
              </Link>
            </div>
            <div>
              <Link to="/login" onClick={onLogout} className=" d-flex gap-4">
                <i data-feather="log-out" className="fw9-menu"></i>
                <h3 className="fw9-menu">Log Out</h3>
              </Link>
            </div>
          </div>

          <div className="col-lg-9 mt-5 mt-lg-0 d-flex flex-column gap-2">
            <div className="d-flex justify-content-between fw9-balance flex-column flex-lg-row">
              <div>
                <h5 className="text-light">Balance</h5>
                <h1 className="text-light">Rp {profile?.balance}</h1>
                <p className="text-light">{profile?.phone_number}</p>
              </div>
              <div className="d-flex flex-column">
                <button type="button" className="btn btn-outline-secondary fw9-transaction">
                  <i data-feather="arrow-up" className="fw9-menu"></i> Transfer
                </button>
                <button type="button" className="btn btn-outline-secondary fw9-transaction">
                  <i data-feather="plus" className="fw9-menu"></i> Top Up
                </button>
              </div>
            </div>

            <div className="d-flex gap-2 flex-column flex-lg-row mb-0">
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

                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
