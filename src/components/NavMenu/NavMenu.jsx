import React from 'react'
import './NavMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHouse, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Swal from "sweetalert2"



export const NavMenu = ({ currentView, setCurrentView }) => {

  const handleBtnClick = (section) => {
    setCurrentView(section)
    if (section === "signout") {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Succesfully logged out',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <nav className='navmenu'>
      <ul className='navmenu-list'>
        <li className={currentView === 'home' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button className='selected' onClick={() => { handleBtnClick('home') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHouse} />Home</button></li>
        <li className={currentView === 'favorites' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button onClick={() => { handleBtnClick('favorites') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHeart} />Favorites</button></li>
        <li className={currentView === 'toread' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button onClick={() => { handleBtnClick('toread') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBookOpen} />ToRead</button></li>
        <li className={currentView === 'finished' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button onClick={() => { handleBtnClick('finished') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCircleCheck} />Finished</button></li>
        <li className={currentView === 'search' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button onClick={() => { handleBtnClick('search') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faMagnifyingGlass} />Search</button></li>

        <a href="/">
          <li className={currentView === 'signout' ? 'selected navmenu-list-item' : 'navmenu-list-item'}><button onClick={() => { handleBtnClick('signout') }}> <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSignOut} />Sign out</button></li>
        </a>
      </ul>
    </nav>
  )
}
