import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Example from './pages/Example';
import Count from './pages/Counter';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export class App extends Component {
  render() {
    return (
      <Routes>
        {/* <Route path="/" element={<Example />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="counter" element={<Count />} />
      </Routes>
    );
  }
}

export default App;
