import React, { useContext } from 'react'
import './BookFinishedCard.css'
import { GlobalContext } from '../../context/GlobalState'

export const BookFinishedCard = ({book}) => {

  const { addBookToToRead, removeBookFromFinished, addBookToFavorites  } = useContext(GlobalContext)

  return (
    <li key={book.book_id} className="book-card">
      <div className="book-card-header">
        <img src={book.cover} alt="Movie cover" className='book-card-img' />
        <h2>{book.name}</h2>
      </div>
      <div className="book-card-info">
        <div className="info-details">
          <span><strong>Author: </strong>{book.authors[0]}</span>
          <span><strong>Release: </strong>{book.year}</span>
          <span><strong>Rating: </strong>{book.rating}</span>
        </div>
        <div className="info-buttons">
          <button onClick={() => {addBookToToRead(book)}}>Add to ToRead</button>
          <button onClick={() => {removeBookFromFinished(book)}}>Remove from Finished</button>
          <button onClick={() => {addBookToFavorites(book)}}>Add to Favorites</button>
        </div>
      </div>
    </li>
  )
}
