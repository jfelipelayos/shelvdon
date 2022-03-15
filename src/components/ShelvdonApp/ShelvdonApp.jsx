import React from 'react'
import './ShelvdonApp.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Login } from '../Login/Login'
import { Signup } from '../Signup/Signup'

export const ShelvdonApp = (props) => {
  return (
    <div className='app'>
      <Header />
      <div className="app-mainview">
        {props.children}
      </div>
      <Login></Login>
      <Signup></Signup>
      <Footer />
    </div>
  )
}
