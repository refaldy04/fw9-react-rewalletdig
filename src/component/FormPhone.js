// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate /*useLocation*/ } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const phoneSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^[+123456789]+$/, 'Number only')
    .required('Required'),
});

const AuthForm = ({ errors, handleSubmit, handleChange }) => {
  // const location = useLocation();
  return (
    <Form className="mt-5" noValidate onSubmit={handleSubmit}>
      {/* {location.state?.errMsg && (
          <div>
            <Alert variant="danger">{location.state.errMsg}</Alert>
          </div>
        )} */}
      <Form.Group className="mb-3" controlId="formBasicPhone">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control name="phone" type="text" onChange={handleChange} placeholder="Enter your phone number" isInvalid={!!errors.phone} />
        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      {/* <HomeButton /> */}
      <div className="d-grid gap-2 my-5">
        <Button className="btn btn-primary" type="submit">
          Continue
        </Button>
      </div>
    </Form>
  );
};

export function FormPhone() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard');
  }

  return (
    <Formik initialValues={{ phone: '' }} onSubmit={handleClick} validationSchema={phoneSchema}>
      {(props) => <AuthForm {...props} />}
    </Formik>
  );
}

export default FormPhone;
