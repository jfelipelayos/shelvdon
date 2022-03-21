import './Signup.css';
import PeopleReading from '../../assets/images/readers.png';

export const Signup = () => {

    return (
        <section style={{ marginTop: '150px' }}>
            <div className="card mb-3 signup-general-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PeopleReading} className="img-fluid rounded-start" alt="girl-with-books-stack" />
                    </div>
                    <div className="col-md-8">
                        <form action="">

                            <div className="signup-form">
                                <div className="section-1">
                                    <div class="form-group">
                                        <label for="inputName">Full Name</label>
                                        <input type="text" class="form-control" id="signup-inputName" aria-describedby="nameHelp" placeholder="Enter full name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                </div>

                                <div className="section-2">
                                <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm password</label>
                                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password"/>
                                    </div>
                                </div>
                            </div>

                            <div className="section-3">
                            <small id="signup-formHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br />
                            <button type="submit" className='btn btn-success' id='signup-button'>Sign Up</button>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}