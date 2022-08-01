import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/asyncActions/user';
import Alert from 'react-bootstrap/Alert';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Required').max(8, 'usename to long'),
  email: Yup.string().email('invalid email format wkwkwk').required('Required'),
  password: Yup.string().min(4).required('Required'),
});

const AuthForm = ({ errors, handleSubmit, handleChange, values }) => {
  const navigate = useNavigate();
  const successMsg = useSelector((state) => state.user.successMsg);
  const errorMsg = useSelector((state) => state.user.errorMsg);

  React.useEffect(() => {
    if (successMsg) {
      navigate('/create-pin', { state: { successMsg } });
    }
  }, [navigate, successMsg]);

  return (
    <>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control name="username" type="text" value={values.username} onChange={handleChange} placeholder="Enter your username" isInvalid={!!errors.username} />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control name="email" type="email" onChange={handleChange} placeholder="Enter your e-mail" isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control name="password" type="password" onChange={handleChange} placeholder="Create your password" isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit" className="fw-login-btn text-light mt-4">
            Sign-Up
          </Button>
        </div>
      </Form>
    </>
  );
};

function FormInput() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const onRegister = (value) => {
    dispatch(register(value));
  };

  React.useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate, token]);
  return (
    <Formik initialValues={{ fullName: '', username: '', email: '', password: '' }} onSubmit={onRegister} validationSchema={loginSchema}>
      {(props) => <AuthForm {...props} />}
    </Formik>
  );
}

export default FormInput;
