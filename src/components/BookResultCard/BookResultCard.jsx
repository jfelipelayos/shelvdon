import React from 'react'
import './BookResultCard.css'

export const BookResultCard = ({book}) => {
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
          <button onClick={() => {console.log(`${book.name} added to ToRead`)}}>Add to ToRead</button>
          <button onClick={() => {console.log(`${book.name} added to Finished`)}}>Add to Finished</button>
        </div>
      </div>
    </li>
  )
}
