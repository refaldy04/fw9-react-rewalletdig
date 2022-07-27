import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link /*useLocation*/ } from 'react-router-dom';
// import { Alert } from 'bootstrap';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('invalid email format wkwkwk').required('Required'),
  password: Yup.string().min(4).required('Required'),
});

const onLogin = () => {
  localStorage.setItem('auth', 'random-token');
};

const AuthForm = ({ errors, handleSubmit, handleChange }) => {
  // const location = useLocation();
  return (
    <Form noValidate onSubmit={handleSubmit}>
      {/* {location.state?.errMsg && (
        <div>
          <Alert variant="danger">{location.state.errMsg}</Alert>
        </div>
      )} */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control name="email" type="email" onChange={handleChange} placeholder="Enter email" isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control name="password" type="password" onChange={handleChange} placeholder="Password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      {/* <HomeButton /> */}
      <p className="mt-4 text-end fw-forgot-pw">
        <Link to="/confirm-email">Forgot password?</Link>
      </p>
      <div className="d-grid">
        <Button variant="primary" type="submit" onClick={onLogin} className="fw-login-btn text-light">
          Login
        </Button>
      </div>
    </Form>
  );
};

function FormInput() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard');
  }
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleClick} validationSchema={loginSchema}>
      {(props) => <AuthForm {...props} />}
    </Formik>
  );
}

export default FormInput;
