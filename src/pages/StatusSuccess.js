import React from 'react'
import '../asset/css/status-success.css'
import { Link } from 'react-router-dom'
import check from '../asset/img/check.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/reducers/user'
import { IconContext } from 'react-icons'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
export const StatusSuccess = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <>
      <Navbar />

      <main>
        <div className="dropdown d-lg-none d-block">
          <button className="fw9-btn-menu text-light btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/dashboard" aria-current="true">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/search-receiver">
                Transfer
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/top-up">
                Top Up
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <hr />
            <li>
              <button className="dropdown-item" onClick={onLogout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-3">
          <Sidebar />

          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column gap-4 bg-light rounded-4 fw9-input-amount">
            <div className="rounded-circle d-flex justify-content-center align-items-center fw9-status mx-auto">
              <img src={check} alt="check" />
            </div>

            <p className="fw9-text-status mx-auto">Transfer Success</p>

            <div className="d-flex align-items-start gap-2 fw9-detail">
              <div className="d-flex flex-column justify-content-between">
                <h5 className="name-history">Amount</h5>
                <p className="type-history">Rp100.000</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 fw9-detail">
              <div className="d-flex flex-column justify-content-between">
                <h5 className="name-history">Balance Left</h5>
                <p className="type-history">Rp20.000</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 fw9-detail">
              <div className="d-flex flex-column justify-content-between">
                <h5 className="name-history">Date And Time</h5>
                <p className="type-history">May 11, 2020 - 12.20</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 fw9-detail">
              <div className="d-flex flex-column justify-content-between">
                <h5 className="name-history">Notes</h5>
                <p className="type-history">For buying some socks</p>
              </div>
            </div>

            <p className="transfer-header">Transfer To</p>
            <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row fw9-receiver">
              <div className="d-flex align-items-start gap-2">
                <img src="asset/img/David.png" alt="" className="img-fluid" />
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="name-history">Samuel Suhi</h5>
                  <p className="type-history">+62 813-8492-9994</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-xl-row justify-content-end gap-3 mt-5">
              <button type="button" className="btn fw9-submit-btn grey fw-bold text-light">
                <IconContext.Provider value={{ size: '2em', color: 'gray' }}>
                  <FiShare2 />
                </IconContext.Provider>
              </button>
              <button type="button" className="btn fw9-submit-btn grey justify-content-center fw-bold fw9-primary-clr d-flex align-items-center">
                {<FiDownload />} Download PDF
              </button>
              <Link to="/dashboard" type="button" className="btn fw9-submit-btn justify-content-center fw-bold text-light d-flex align-items-center">
                Continue
              </Link>
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
  )
}

export default StatusSuccess
