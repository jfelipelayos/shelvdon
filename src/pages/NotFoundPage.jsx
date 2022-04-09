import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Img404 from '../assets/images/shelvdon-404v2-removebg.png';
import '../styles/NotFoundPage.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export default function NotFoundPage() {
  let navigate = useNavigate();

  const handleClick = ()=>{
      navigate("/home")
  }
  return (
    <section>
      <Header/>

        <article className='notfound-section'>
          <img src={Img404} alt="404-notFound" height={'500px'} className="notfound-section-img"/>
          <button className='notfound-section-button' onClick={handleClick}><FontAwesomeIcon style={{ height: '20px' }} icon={faHouse} /></button>
        </article>

        <Footer id='footer-notfound'/>
        </section>

  )
}
