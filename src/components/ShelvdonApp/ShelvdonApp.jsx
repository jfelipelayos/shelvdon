import React from 'react'
import './ShelvdonApp.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const ShelvdonApp = (props) => {
  return (
    <div className='app'>
      <Header />
      <div className="app-mainview">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
