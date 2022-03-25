import './Signup.css';
import PeopleReading from '../../assets/images/readers.png';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Forms/FormikControl';
import API from '../../assets/api/users.json';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    let navigate = useNavigate();

    const initialValues = {
        id: '', fullName: '', email: '', password: '', passwordConfirmation: ''
    };

    const passwordRegex = /(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9])/;

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().matches(passwordRegex, 'Password must contain at least: one lowercase, one uppercase, one number and 8 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Password confirmation is required'),
        fullName: Yup.string().required('Name is required')
    });

    const onSubmit = values => {
        let data = {
            id: (API.users.length +1).toString() ,
            fullName: values.fullName,
            email: values.email,
            password: values.password
        }
        if(validateEmail(values.email)){
            API.users.push(data)
        }

        console.log(API);


        Swal.fire({
            icon: 'success',
            title: 'Signed up!',
            text: "Now let's access the app",
            confirmButtonText: 'Go'
          }).then(()=> navigate("/login"))


    }
    
    const validateEmail = (value) => {
        let found = API.users.find(user => user.email === value);

        console.log(found);

        if (found === undefined) {
            return true;
        }
        return false;

    }

    return <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return <article style={{ marginTop: '150px' }}>
                    <div className="card mb-3 signup-general-card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={PeopleReading} className="img-fluid rounded-start" alt="girl-with-books-stack" />
                            </div>
                            <div className="col-md-8">

                                <Form>
<div className="signup-form">

                                    <div className="section-1">
                                        <FormikControl control='input' type='text' label='Full name' name='fullName' className="form-group" />

                                        <FormikControl control='input' type='password' label='Password' name='password' className="form-group" />
                                    </div>
                                    <div className="section-2">
                                        <FormikControl control='input' type='email' label='Email address' name='email' className="form-group" />

                                        <FormikControl control='input' type='password' label='Password confirmation' name='confirmPassword' className="form-group" />
                                    </div>
                                    </div>
                                    <small id="signup-formHelp" className="info-text">We'll never share your information with anyone else.</small><br />
                                    <button type="submit" className='btn btn-success signup-button' id='signup-button' disabled={!formik.isValid}>Sign Up</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </article>

            }
        }
    </Formik>
}


/* import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    let navigate = useNavigate();



    

    return (
        <article style={{ marginTop: '150px' }}>
            <div className="card mb-3 signup-general-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PeopleReading} className="img-fluid rounded-start" alt="girl-with-books-stack" />
                    </div>
                    <div className="col-md-8">

                    
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email && !values.password) {
                                    errors.email = 'Email is required';
                                    errors.password = 'Password is required';
                                } else if (!values.email) {
                                    errors.email = 'Email is required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                } 

                                const passwordRegex = /(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9])/;
                                if (!values.password) {
                                    errors.password = "Password is required";
                                } else if (values.password.length < 8) {
                                    errors.password = "Password must be at leat 8 characters long";
                                } else if (!passwordRegex.test(values.password)) {
                                    errors.password =
                                        "Password must contain at least: one lowercase, one uppercase and one number";
                                } 
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(true);
                                navigate("/home");
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='signup-form'>
                                    <div className="section-1">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Full Name</label>
                                            <Field type="text" name="inputName" className="form-control" id="signupInputName" aria-describedby="nameHelp" placeholder="Enter full name" />
                                            <ErrorMessage name="inputName" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inputPassword">Password</label>
                                            <Field type="password" name="inputPassword" className="form-control" id="signupInputPassword" aria-describedby="passwordHelp" placeholder="Type a password" />
                                            <ErrorMessage name="inputPassword" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                        </div>
                                    </div>

                                    <div className="section-2">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Email address</label>
                                            <Field type="email" name="inputEmail" className="form-control" id="signupInputEmail" aria-describedby="emailHelp" placeholder="Enter email address" />
                                            <ErrorMessage name="inputEmail" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inputPasswordConfirmation">Confirm password</label>
                                            <Field type="password" name="inputPasswordConfirmation" className="form-control" id="signupInputConfirmationPassword" aria-describedby="passwordHelp" placeholder="Confirm your password" />
                                            <ErrorMessage name="inputPasswordConfirmation" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="section-3">
                                        <small id="signup-formHelp" className="form-text text">We'll never share your email with anyone else.</small><br />
                                        <button type="submit" disabled={isSubmitting} className='btn btn-success' id='signup-button'>Sign Up</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    </div>
            </div>
        </article>
    )
} */