import React, {useContext} from 'react'
import './ToRead'
import { GlobalContext } from '../../../context/GlobalState'

export const ToRead = () => {
  const { toread } = useContext(GlobalContext)

  console.log(toread);
  return (
    <div>
      <h2>Books to read</h2>
      <ul>
        {toread.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}
