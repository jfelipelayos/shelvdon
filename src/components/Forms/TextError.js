import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function TextError (props) {
  return <div className='error' style={{color: '#990000', fontWeight: 'bold', marginTop:'-5%'}}>{props.children}</div>
}

export default TextError