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
            id: (API.users.length + 1).toString(),
            fullName: values.fullName,
            email: values.email,
            password: values.password
        }
        if (validateEmail(values.email)) {
            API.users.push(data)
        }

        console.log(API);


        Swal.fire({
            icon: 'success',
            title: 'Signed up!',
            text: "Now let's access the app",
            confirmButtonText: 'Go'
        }).then(() => navigate("/login"))


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