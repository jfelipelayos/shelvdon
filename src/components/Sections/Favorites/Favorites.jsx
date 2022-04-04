import React, {useContext} from 'react'
import './Favorites.css'
import { GlobalContext } from '../../../context/GlobalState'
import AlphabetMenu from '../../AlphabetMenu/AlphabetMenu'


export const Favorites = () => {
  const { favorites } = useContext(GlobalContext)
  return (
    <div style={{margin:'0 1.5rem', marginTop:'1rem'}}>Favorite Books
            <AlphabetMenu/>
      <ul>
        {favorites.map((book) => (
            <li>{book.name}</li>
          ))}
      </ul>
    </div>
  )
}
