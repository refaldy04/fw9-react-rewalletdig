import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Example from './pages/Example';
import Count from './pages/Counter';

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="counter" element={<Count />} />
      </Routes>
    );
  }
}

export default App;
