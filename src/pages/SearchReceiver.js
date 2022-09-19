import React from 'react';
import '../asset/css/search-receiver.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/reducers/user';
import { getAllProfile } from '../redux/asyncActions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/reducers/transfer';

import profile from '../asset/img/robert.png';

// import { FiSearch } from 'react-icons/fi';

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const profileData = useSelector((state) => state.profile.users);
  console.log(profileData);
  const hallo = profileData?.map((user) => (
    <div
      onClick={() => {
        dispatch(selectUser(user.id));
        navigate('/input-amount');
      }}
      key={user.id}
      className="d-flex align-items- justify-content-between flex-column flex-xl-row"
    >
      <div className="d-flex align-items-start gap-2 user text-dark">
        <img src="/default-profile-pic.jpg" alt="Samuel" className="img-fluid profile-pic rounded" />
        <div className="d-flex flex-column justify-content-between">
          <h5 className="name-history">{user.fullname}</h5>
          <p className="type-history">{user.phone_number}</p>
        </div>
      </div>
    </div>
  ));

  React.useEffect(() => {
    dispatch(getAllProfile(token));
  }, []);
  return <>{hallo}</>;
};

export const SearchReceiver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <nav className="fw9-navbar">
        <div className="row d-flex justify-content-between container">
          <h1 className="fw9-brand col-lg-6 mb-5 mb-lg-0">RE-WALLET</h1>
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
          <button className="fw9-btn-menu text-light btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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

        <div className="d-flex gap-3">
          <div className="col-lg-3 flex-column justify-content-between bg-light fw9-menu-list d-none d-lg-flex">
            <div className="d-flex flex-column gap-5">
              <Link to="/dashboard" className="d-flex gap-4 fw9-semibold">
                <i data-feather="grid" className="fw9-menu"></i>
                <h3 className="fw9-menu">Dashboard</h3>
              </Link>
              <Link to="/search-receiver" className="d-flex gap-4">
                <i data-feather="arrow-up" className="fw9-menu-active fw-bold"></i>
                <h3 className="fw9-menu-active fw-bold">Transfer</h3>
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

          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column gap-4 bg-light rounded-4 fw9-search-receiver">
            <p>Search Receiver</p>
            <Form className="mb-5">
              <Form.Group>
                {/* <span className="input-group-text fw9-input-search" id="addon-wrapping">
                    <FiSearch />
                  </span> */}
                <Form.Control type="text" className=" fw9-input-search" placeholder="Search receiver here" aria-label="Username" aria-describedby="addon-wrapping" />
              </Form.Group>
            </Form>

            <div className="d-flex flex-column gap-5 mt-4 mt-xl-0">
              <User />
            </div>
          </div>
        </div>
      </main>
      <footer className="d-flex flex-column flex-lg-row justify-content-lg-between">
        <p>2020 Re-wallet. All right reserved.</p>
        <div className="d-flex gap-lg-5 flex-column flex-lg-row">
          <p>+62 5637 8882 9901</p>
          <p>contact@rewallet.com</p>
        </div>
      </footer>
    </>
  );
};

export default SearchReceiver;
