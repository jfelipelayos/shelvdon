import React from 'react'
import './Header.css'
import ShelvdonIcon from '../../assets/images/Shelvdon-icon.png'

export const Header = () => {
  return (
    <header style={{height:'80px'}}>
      <img src={ShelvdonIcon} alt="shelvdon-icon"  style={{height:'70px'}}/>
    </header>
  )
}
