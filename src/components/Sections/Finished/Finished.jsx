import React, {useContext} from 'react'
import './Finished.css'
import { GlobalContext } from '../../../context/GlobalState'


export const Finished = () => {
  const { finished } = useContext(GlobalContext)

  return (
    <div>
      <h2>Books to read</h2>
      <ul>
        {finished.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}
