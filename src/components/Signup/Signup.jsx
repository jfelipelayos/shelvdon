import './Signup.css';
import PeopleReading from '../../assets/images/readers.png';

export const Signup = () => {

    return (
        <section>
             <div class="card mb-3 login-general-card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={PeopleReading} class="img-fluid rounded-start" alt="girl-with-books-stack" />
                    </div>
                    <div class="col-md-8 signup-form">
                        <form action="">
                        <div className="name-form">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name-signup' />
                        </div>

                        <div className="password-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password-signup' />
                        </div>

                        <button type="submit" className='btn btn-success' id='signup-button'>Sign Up</button>

                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}