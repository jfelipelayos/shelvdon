import React, { useContext } from 'react'
import './BookResultCard.css'
import { GlobalContext } from '../../context/GlobalState'

export const BookResultCard = ({book, isFinished}) => {

  const { toread, finished, addBookToToRead, addBookToFinished, removeBookFromFinished  } = useContext(GlobalContext)

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
          {
            isFinished 
            ? <button onClick={() => {removeBookFromFinished(book)}}>Remove from list</button>
            : <button onClick={() => {addBookToFinished(book)}}>Add to Finished</button>
          }
          
        </div>
      </div>
    </li>
  )
}
