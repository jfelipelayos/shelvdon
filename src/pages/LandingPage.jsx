import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import BookShelf from '../assets/images/book-shelf.jpg';
import OpenBook from '../assets/images/open-textbook.jpg';



export default function LandingPage() {
  return (
    <section>
      <Header></Header>
      <article>
        <div class="card bg-dark text-white">
          <img class="card-img" src={BookShelf} style={{ maxHeight: '350px', opacity: '0.4' }} alt="banner-cover" />
          <div class="card-img-overlay" style={{ marginTop: '8%', marginLeft: '5%' }}>
            <h1 class="card-title">Welcome to Shelvdon</h1>
            <h3 class="card-text">Your smart friend who always knows best when it comes to having and organizing a good reading plan. The best buddy to visit new paper worlds.</h3>
            <button className="btn btn-success" style={{ padding: '1% 2%', marginLeft: '70%' }}><a href="/login" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Start the journey</a></button>
          </div>
        </div>
      </article>
      <article style={{margin:'5%'}}>
        <div class="card bg-dark text-white">
          <img class="card-img" src={OpenBook} style={{ maxHeight: '350px', opacity: '0.4' }} alt="banner-cover" />
          <div class="card-img-overlay" style={{ marginTop: '8%', marginLeft: '5%' }}>
            <h1 class="card-title">Reading Paths</h1>
            <h3 class="card-text">Create custom reading paths. Designed for people who enjoys literature, learning and enhance their skills.</h3>
            <button className="btn btn-success" disabled style={{ padding: '1% 2%', marginLeft: '70%' }}><a href="/login" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Coming Soon</a></button>
          </div>
        </div>
      </article>
      <Footer style={{ marginTop: '70vh' }}></Footer>
    </section>
  )
}