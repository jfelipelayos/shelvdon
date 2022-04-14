//@ vendor
import { Field, ErrorMessage } from 'formik'

//@ component
import TextError from './TextError'

//@ style
import './input.css';

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control' style={{display: 'flex', flexFlow:'column', background: 'none', border: 'none', color: 'white'}}>
      <label className='label-text' htmlFor={name} style={{fontWeight: 'bold'}}>{label}</label>
      <Field id={name} name={name} {...rest} style={{background: 'white', padding:'0.4%', borderRadius:'5px'}} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input