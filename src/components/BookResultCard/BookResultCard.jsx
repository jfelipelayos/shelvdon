import React, { useContext } from 'react'

//@context
import { GlobalContext } from '../../context/GlobalState'

//@component
import BookShouldBeDisabled from '../../helper/BookShouldBeDisabled'
import './BookResultCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



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
          <button
            disabled={BookShouldBeDisabled(book, toread)}
            onClick={() => {addBookToToRead(book)}}
            className="btn-resultcard"
            ><FontAwesomeIcon icon={faBookOpen} /> Add to ToRead
          </button>
          {
            isFinished 
            ? <button
                onClick={() => {removeBookFromFinished(book)}}><FontAwesomeIcon icon={faTrash} /> Delete from list
              </button>
            : <button
                disabled={BookShouldBeDisabled(book, finished)}
                onClick={() => {addBookToFinished(book)}}><FontAwesomeIcon icon={faCircleCheck} /> Add to finished
              </button>
          }
          <button
                onClick={() => {removeBookFromFinished(book)}}>
                  <a href={book.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlus} /> Details</a>
              </button>      
        </div>
      </div>
    </li>
  )
}
