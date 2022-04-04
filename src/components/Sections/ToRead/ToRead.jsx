import React, {useContext} from 'react'
import './ToRead'
import { GlobalContext } from '../../../context/GlobalState'
import AlphabetMenu from '../../AlphabetMenu/AlphabetMenu'

export const ToRead = () => {
  const { toread } = useContext(GlobalContext)

  console.log(toread);
  return (
    <div style={{margin:'1.5rem'}}>
      <h2>Books to read</h2>
      <AlphabetMenu/>
      <ul style={{marginTop:'10%'}}>
        {toread.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>

      <article id='A' style={{marginTop: '79%'}}>A</article>

    </div>
  )
}
