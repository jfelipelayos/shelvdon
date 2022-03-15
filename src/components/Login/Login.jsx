import './Login.css';
import GirlWithBooks from '../../assets/images/woman-books.jpg';

export const Login = () => {

    return (
        <section>
            <div class="card mb-3 login-general-card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={GirlWithBooks} class="img-fluid rounded-start" alt="girl-with-books-stack" />
                    </div>
                    <div class="col-md-8 login-form">
                        <form action="">
                        <div className="email-form">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email-login' />
                        </div>

                        <div className="password-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password-login' />
                        </div>

                        <button type="submit" className='btn btn-success' id='login-button'>Login</button>

                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}