import React, { useState } from "react";
import "../asset/css/change-password.css";
import Navbar from "../component/Navbar";
import Dropdown from "../component/Dropdown";
import Footer from "../component/Footer";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiLock } from "react-icons/fi";
import { IconContext } from "react-icons";
import Alert from "react-bootstrap/Alert";
import { changePassword } from "../redux/asyncActions/user";
import { resetMsg } from "../redux/reducers/user";
import Sidebar from "../component/Sidebar";

const schema = yup.object().shape({
  oldPass: yup.string().required("Required"),
  newPass: yup.string().min(8, "Too Short!").required("Required"),
  repeatNewPass: yup.string().required("Required"),
});

export const ChangePassword = () => {
  const [errMsg, setErrMsg] = useState(null);
  const token = useSelector((state) => state.user.token);
  const errorMsg = useSelector((state) => state.user.errorMsg);
  const successMsg = useSelector((state) => state.user.successMsg);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetMsg());
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <Dropdown />

        <div className="d-flex gap-3">
          <Sidebar />

          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-column flex-wrap gap-2 bg-light rounded-4 fw9-input-amount">
            <h4>Change Password</h4>
            <p>
              You must enter your current password and then type your new
              password twice.
            </p>
            <div className="d-flex flex-column fw9-change-ps justify-content-center mx-auto flex-wrap mt-5">
              <Formik
                initialValues={{
                  oldPass: "",
                  newPass: "",
                  repeatNewPass: "",
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  if (values.newPass !== values.repeatNewPass) {
                    setErrMsg("please repeat new password correctly");
                  } else {
                    setErrMsg(null);
                    dispatch(
                      changePassword({
                        token,
                        data: {
                          password: values.oldPass,
                          newpassword: values.newPass,
                        },
                      })
                    );
                  }
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <>
                    {errMsg && (
                      <Alert key="danger" variant="danger">
                        {errMsg}
                      </Alert>
                    )}

                    {errorMsg && (
                      <Alert key="danger" variant="danger">
                        {errorMsg}
                      </Alert>
                    )}

                    {successMsg && (
                      <Alert key="success" variant="success">
                        {successMsg}
                      </Alert>
                    )}

                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group className="my-2">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingInputGroup"
                        >
                          Email
                        </label>
                        <InputGroup hasValidation>
                          <div className="input-group-text">
                            <IconContext.Provider value={{ size: "1.5rem" }}>
                              <div>
                                <FiLock />
                              </div>
                            </IconContext.Provider>
                          </div>
                          <Form.Control
                            type="password"
                            name="oldPass"
                            placeholder="Current password"
                            value={values.oldPass}
                            onChange={handleChange}
                            isInvalid={!!errors.oldPass}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.oldPass}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="my-4">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingInputGroup"
                        >
                          Email
                        </label>
                        <InputGroup hasValidation>
                          <div className="input-group-text">
                            <IconContext.Provider value={{ size: "1.5rem" }}>
                              <div>
                                <FiLock />
                              </div>
                            </IconContext.Provider>
                          </div>
                          <Form.Control
                            type="password"
                            name="newPass"
                            placeholder="New password"
                            value={values.newPass}
                            onChange={handleChange}
                            isInvalid={!!errors.newPass}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.newPass}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="my-4">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingInputGroup"
                        >
                          Email
                        </label>
                        <InputGroup className="input-group">
                          <div className="input-group-text">
                            <IconContext.Provider value={{ size: "1.5rem" }}>
                              <div>
                                <FiLock />
                              </div>
                            </IconContext.Provider>
                          </div>
                          <Form.Control
                            type="password"
                            name="repeatNewPass"
                            placeholder="Repeat new password"
                            value={values.repeatNewPass}
                            onChange={handleChange}
                            isInvalid={!!errors.repeatNewPass}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.repeatNewPass}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary text-light"
                          type="submit"
                        >
                          Change Password
                        </button>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChangePassword;
