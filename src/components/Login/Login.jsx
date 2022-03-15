import './Login.css';
import GirlWithBooks from '../../assets/images/woman-books.jpg';

export const Login = () => {

    return (
        <section>
            <div className="card mb-3 login-general-card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={GirlWithBooks} className="img-fluid rounded login-image" alt="girl-with-books-stack" />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <form className='login-form'>
                            <div className="form-group email-form">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group password-form">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-success login-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}