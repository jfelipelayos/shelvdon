//@ vendor
import React from 'react'

//@ style
import 'bootstrap/dist/css/bootstrap.min.css'
import './TextError.css'

function TextError (props) {
  return <div className='error validation-error-message'>{props.children}</div>
}

export default TextError