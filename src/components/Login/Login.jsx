import './Login.css';
import GirlWithBooks from '../../assets/images/woman-books.jpg';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const Login = () => {

    return (
        <section>
            <div className="card mb-3 login-general-card" style={{ backgroundColor: '#2e0000', color: 'white' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={GirlWithBooks} className="img-fluid rounded login-image" alt="girl-with-books-stack" />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        {/*  <form className='login-form'>
                            <div className="form-group email-form">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group password-form">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-success login-button" style={{minWidth: '150px'}}><a href="/home" style={{color: 'white', textDecoration: 'none'}}>Login</a></button>
                        </form> */}

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email && !values.password) {
                                    errors.email = 'Email is required';
                                    errors.password = 'Password is required';
                                } else if  (!values.email) {
                                    errors.email = 'Email is required';                           
                                } else if  (!values.password) {
                                    errors.password = 'Password is required';
                                }else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                /* else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]).{8,32}$/i.test(values.password)){
                                  errors.password = 'Invalid password. Remember it needs at least: one digit [0-9], one lowercase [a-z], one uppercase [A-Z], one special character and at least 8 characters in length.';
                               } */
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='login-form'>
                                    <label htmlFor="email">Email</label> 
                                    <Field type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <ErrorMessage name="email" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                    <label htmlFor="password">Password</label> 
                                    <Field type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                                    <ErrorMessage name="password" component="div" style={{ color: 'red', fontWeight: 'bold' }} />
                                    <button type="submit" disabled={isSubmitting} className="btn btn-success login-button"><a href="/home" style={{color: 'white', textDecoration: 'none', margin: 'auto'}}>Log In </a>
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}