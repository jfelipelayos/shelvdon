import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import BookShelf from '../assets/images/book-shelf.jpg';
import OpenBook from '../assets/images/open-textbook.jpg';
import '../styles/LandingPage.css';


export default function LandingPage() {
  return (
    <section>
      <Header></Header>
      <article className="main-banner">
        <div className="card bg-dark text-white">
          <img className="card-img main-banner-img" src={BookShelf}  alt="banner-cover" />
          <div className="card-img-overlay main-banner-overlay">
            <div className="main-banner-section">
            <h1 className="card-title">Welcome to Shelvdon</h1>
            <h3 className="card-text">Your smart friend who always knows best when it comes to having and organizing a good reading plan. The best buddy to visit new paper worlds.</h3>
            </div>
            <a href="/login" className="main-banner-link"><button className="btn btn-success main-banner-button">Start the journey</button></a>
          </div>
        </div>
      </article>
      <article className="section-banner-box">
        <div className="card bg-dark text-white">
          <img className="card-img section-banner-img" src={OpenBook} alt="banner-cover" />
          <div className="card-img-overlay section-banner-overlay">
          <div className="section-banner-section">
            <h1 className="card-title">Reading Paths</h1>
            <h3 className="card-text">Create custom reading paths. Designed for people who enjoys literature, learning and enhance their skills.</h3>
            </div>
            <button className="btn btn-success section-banner-button" disabled ><a href="/login" className="section-banner-link">Coming Soon</a></button>
          </div>
        </div>
      </article>
      <Footer id='footer-landing'></Footer>
    </section>
  )
}