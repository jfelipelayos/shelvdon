import React, {useContext} from 'react'
import './Favorites.css'
import { GlobalContext } from '../../../context/GlobalState'


export const Favorites = () => {
  const { favorites } = useContext(GlobalContext)
  return (
    <div>Favorite Books
      <ul>
        {favorites.map((book) => (
            <li>{book.name}</li>
          ))}
      </ul>
    </div>
  )
}
