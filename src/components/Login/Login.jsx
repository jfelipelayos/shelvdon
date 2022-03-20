import './Login.css';
import GirlWithBooks from '../../assets/images/woman-books.jpg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import swal from "sweetalert2";
import  { Navigate, useNavigate } from 'react-router-dom'
import API from '../../assets/api/users.json';

export const Login = () => {
    let navigate = useNavigate();
    const checkEmailCredentials = (value)=>{
        let found = API.users.find(user => user.email === value);

        if(found === undefined){
            return true;
        }
            return false;        
    }

    const checkPasswordCredentials = (e, c)=>{
        let checked = API.users.find(user => user.email === e);

        if(checked !== undefined && checked.password === c){
            return true;
        }
            return false;        
    }

    return (
        <section>
            <div className="card mb-3 login-general-card" style={{ backgroundColor: '#2e0000', color: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={GirlWithBooks} className="img-fluid rounded login-image" alt="girl-with-books-stack" />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email && !values.password) {
                                    errors.email = 'Email is required';
                                    errors.password = 'Password is required';
                                } else if  (!values.email) {
                                    errors.email = 'Email is required';                           
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                } else if(checkEmailCredentials(values.email)){
                                    errors.email = 'This user does not exist'
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
                            onSubmit={(values, errors, { setSubmitting }) => {
                                setSubmitting(true);
                                navigate("/home")
                               /*  if(errors){
                                    setSubmitting(false);
                                    swal.fire({
                                        title: "Error",
                                        text: "Please fill in correct information",
                                        icon: "error",
                                        confirmButtonText: "Got it!",
                                        confirmButtonColor: "#f96332"
                                    });
                                }else{
                                    setSubmitting(true);
                                    return <Navigate to='/home'  />
                                } */  
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
                                    <button type="submit" disabled={isSubmitting} className="btn btn-success login-button"
                                    >Log In
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