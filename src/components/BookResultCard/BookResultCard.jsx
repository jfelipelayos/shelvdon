import React from 'react'
import './BookResultCard.css'

export const BookResultCard = ({book}) => {
  return (
    <li key={book.book_id} className="book-card">
      <img src={book.cover} alt="Movie cover" className='book-card-img' />
      <div className="book-card-info">
        <h2>{book.name}</h2>
        <div className="info-details">
          <span><strong>Author: </strong>{book.authors[0]}</span>
          <span><strong>Release: </strong>{book.year}</span>
          <span><strong>Rating: </strong>{book.rating}</span>
        </div>
        <div className="info-buttons">
          <button onClick={() => {console.log(`${book.name} added to ToRead`)}}>Add to ToRead</button>
          <button onClick={() => {console.log(`${book.name} added to Finished`)}}>Add to Finished</button>
        </div>
      </div>
    </li>
  )
}
