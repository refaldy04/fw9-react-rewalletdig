import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { increment, decrement, customValue } from '../redux/reducers/counter';
// class Series extends React.Component {
//   render() {
//     return <li>{this.props.name}</li>;
//   }
// }

// class Counter extends React.Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     this.setState(({ count }) => ({
//       count: count + 1,
//     }));
//   };
//   decrease = () => {
//     this.setState(({ count }) => ({
//       count: count - 1,
//     }));
//   };
//   render() {
//     return (
//       <>
//         <button onClick={this.increase}>Increase</button>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.decrease}>Decrease</button>
//       </>
//     );
//   }
// }

function Wkwkw() {
  const hahaha = useSelector((state) => state.berhitung.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Container className="d-flex justify-content-center flex-column gap-4 align-items-center min-vh-100">
        <div className="d-flex justify-content-center gap-4 align-items-center">
          <Button onClick={() => dispatch(decrement())} className="btn btn-primary">
            -
          </Button>
          <h1>{hahaha}</h1>
          <Button onClick={() => dispatch(increment())} className="btn btn-primary">
            +
          </Button>
        </div>
        <Form.Control onChange={(e) => dispatch(customValue(e.target.value))} className="text-center" />
        <Link to="/" className="btn btn-primary">
          To home page
        </Link>
      </Container>
    </div>
  );
}

export class Counter extends Component {
  render() {
    return (
      <div>
        <Wkwkw />
      </div>
    );
  }
}

class Count extends React.Component {
  render() {
    return (
      <>
        <div>
          <Helmet>
            <title>Counter</title>
          </Helmet>
          <Counter />
        </div>
      </>
    );
  }
}

export default Count;
