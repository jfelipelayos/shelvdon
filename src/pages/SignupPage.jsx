import { Signup } from "../components/Signup/Signup";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export default function SignupPage(){
    return(
        <section>
            <Header/>
            <Signup/>
            <Footer/>
        </section>
    )
}