import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Img404 from '../assets/images/shelvdon-404v2-removebg.png';

export default function NotFoundPage() {
  let navigate = useNavigate();

  const handleClick = ()=>{
      navigate("/home")
  }
  return (
    <section>
        <article style={{margin: 'auto', width:'60%', background: '#BDBDBD', borderRadius: '8px', marginTop:'5%'}}>
          <img src={Img404} alt="404-notFound" height={'500px'}/>
          <button style={{background:'#9A4444', borderRadius: '50px', padding:'0.8%', position: 'absolute', top: '450px', left: '520px'}} onClick={handleClick}><FontAwesomeIcon style={{ height: '20px' }} icon={faHouse} /></button>
        </article>
    </section>
  )
}
