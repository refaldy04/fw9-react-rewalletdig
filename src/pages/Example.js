import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Example extends Component {
  render() {
    return (
      <>
        <div>Example</div>
        <Link className="btn btn-primary" to="/counter">
          Just Playing
        </Link>
      </>
    );
  }
}

export default Example;
