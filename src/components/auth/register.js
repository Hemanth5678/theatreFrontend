import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
    userRegistration,
    clearRegistrationDetails,
} from "../../redux/actions/users-actions.js";

import { RequestLoader, RequestSucceeded } from "../global/form-loader";


import { Formik } from "formik";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registrationRequest = useSelector(
        (state) => state.users.registrationRequest
    );
    const registrationSucceeded = useSelector(
        (state) => state.users.registrationSucceeded,
        shallowEqual
    );
    const registrationError = useSelector(
        (state) => state.users.registrationError
    );
    const registrationErrorOccurred = useSelector(
        (state) => state.users.registrationErrorOccurred
    );

    useEffect(() => {
        document.title = "Register";
    });

    useEffect(() => {
        return dispatch(clearRegistrationDetails());
    }, [dispatch]);

    return (
        <section className="register-route">
            <div className="reg-log-wrapper display-flex">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() =>
                        navigate("/", {
                            state: {
                                elementScroll: "home-scroll",
                            },
                        })
                    }
                >

                </Box>

                <Typography  className="reg-log-header"  variant="h3"  component="div"  >
                    <b>Register</b>
                </Typography>

                <Formik  initialValues={{
                        email: "",
                        username: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address.";
                        }

                        const usernameRegex = /^[a-zA-Z0-9]+$/;
                        if (!values.username) {
                            errors.username = "Required";
                        } else if (usernameRegex.test(values.username)) {
                            errors.username = "Invalid username.";
                        }

                        const passwordRegex = /(?=.*[0-9])/;
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password =
                                "Password must be 8 characters long.";
                        } else if (!passwordRegex.test(values.password)) {
                            errors.password =
                                "Password Must contain one number.";
                        }

                        if (values.password && values.confirmPassword) {
                            if (values.password !== values.confirmPassword) {
                                errors.confirmPassword =
                                    "Password not matched.";
                            }
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        dispatch(userRegistration(values));

                        setTimeout(() => {
                            setSubmitting(false);
                            resetForm();
                        }, 4000);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="form-1">
                            <div className="form-wrapper display-flex">
                                <input  placeholder="Username"  autoComplete="off"  type="text"  name="username"  required  onChange={handleChange}  onBlur={handleBlur}  value={values.username}  />

                                <span>
                                    {errors.username && touched.username && errors.username}
                                </span>
                                
                                <input  placeholder="Email"  autoComplete="off" type="text"  name="email"  required   onChange={handleChange}  onBlur={handleBlur}  value={values.email} />

                                <span>
                                    {errors.email && touched.email && errors.email}
                                </span>

                                <input  placeholder="Password"  autoComplete="off"  name="password"  required  type="password"  onChange={handleChange}  onBlur={handleBlur}  value={values.password}  />

                                <span>
                                    {errors.password && touched.password && errors.password}
                                </span>

                                <input  placeholder="Confirm Password"  autoComplete="off"  name="confirmPassword"  required  type="password"   onChange={handleChange}  onBlur={handleBlur}  value={values.confirmPassword} />

                                <span>
                                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                </span>

                            </div>

                            <div className="form-submission display-flex">
                                {registrationRequest ? <RequestLoader /> : null}

                                {registrationSucceeded && !registrationRequest ? (
                                    <RequestSucceeded />
                                ) : null}

                                {!registrationSucceeded && registrationErrorOccurred && !registrationRequest ? (
                                    <Typography  variant="h6"  component="span"  gutterBottom >
                                        {registrationError}
                                    </Typography>
                                ) : null}

                                <button  className="btn-1"  type="submit"  disabled={isSubmitting} >
                                    Register
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div className="reg-log-navigation">
                    <Typography variant="h7" component="div">
                        <b>Have account?</b>
                    </Typography>
                    <button  className="btn-1"   onClick={() => navigate("/login")}  >
                        Log in now!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;
