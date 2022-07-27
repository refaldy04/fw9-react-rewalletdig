import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Example from './pages/Example';
import Count from './pages/Counter';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SearchReceiver from './pages/SearchReceiver';
import InputAmount from './pages/InputAmount';
import Confirmation from './pages/Confirmation';
import StatusSuccess from './pages/StatusSuccess';
import SignUp from './pages/SignUp';
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import TopUp from './pages/TopUp';
import ConfirmEmail from './pages/ConfirmEmail';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import PersonalInformation from './pages/PersonalInformation';
import PrivateRoute from './component/PrivateRoute';

export class App extends Component {
  render() {
    return (
      <Routes>
        {/* <Route path="/" element={<Example />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="search-receiver" element={<SearchReceiver />} />
        <Route path="input-amount" element={<InputAmount />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="status-success" element={<StatusSuccess />} />
        <Route path="counter" element={<Count />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="create-pin" element={<CreatePin />} />
        <Route path="create-pin-success" element={<CreatePinSuccess />} />
        <Route path="top-up" element={<TopUp />} />
        <Route path="confirm-email" element={<ConfirmEmail />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="profile" element={<Profile />} />
        <Route path="personal-information" element={<PersonalInformation />} />
      </Routes>
    );
  }
}

export default App;
