import React from 'react'
import './MainView.css'

export const MainView = (props) => {
  return (
    <div className='mainview'>
      {props.children}
    </div>
  )
}
