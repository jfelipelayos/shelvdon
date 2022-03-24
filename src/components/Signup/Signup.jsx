import './Signup.css';
import PeopleReading from '../../assets/images/readers.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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

                        {/* <Formik initialValues={{ email: '', password: '',  passwordConfirmation:''}}
                            validate={values => {
                                const errors = {};
                                if (!values.email && !values.password && !values.fullName) {
                                    errors.email = 'Email is required';
                                    errors.password = 'Password is required';
                                    errors.fullName = 'Name is required'
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

                                if(!values.fullName){
                                    errors.fullName = "Name is required";
                                }else if(values.password !== values.passwordConfirmation){
                                    errors.passwordConfirmation = "Passwords do not match"
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(true);
                                navigate("/login");
                            }}>

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
                        </Formik> */}

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
                                        {/* <div className="form-group">
                                            <label htmlFor="inputName">Full Name</label>
                                            <Field type="text" name="inputName" className="form-control" id="signupInputName" aria-describedby="nameHelp" placeholder="Enter full name" />
                                            <ErrorMessage name="inputName" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                        </div> */}

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
}