import React, { useContext } from 'react'
import './BookFinishedCard.css'
import { GlobalContext } from '../../context/GlobalState'
import Swal from 'sweetalert2'

//@icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const BookFinishedCard = ({book}) => {

  const {  removeBookFromFinished, addBookToFavorites  } = useContext(GlobalContext)

  const handleAddBtn = (book) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${book.name} added to favorites`,
      showConfirmButton: false,
      timer: 1500
    })
    addBookToFavorites(book)
  }

  const handleDeleteBtn = (book) => {
    Swal.fire({
      title: `Do you want to delete ${book.name} from the list?`,
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Delete`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${book.name} deleted`,
          showConfirmButton: false,
          timer: 1500
        })
        removeBookFromFinished(book)
      }
    })
  }


  return (
    <li key={book.book_id} className="book-card">
      <div className="book-card-header">
        <img src={book.cover} alt="Movie cover" className='book-card-img' />
        <div className="book-card-title">
        <h2>{book.name}</h2>
        </div>
        <div className="info-buttons">
          <button data-hover="Add to favorites" onClick={() => {handleAddBtn(book)}}><FontAwesomeIcon icon={faHeart} /></button>
          <button data-hover="Remove from list" onClick={() => {handleDeleteBtn(book)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
      <div className="book-card-info">
        <div className="info-details">
          <span><strong>Author: </strong>{book.authors[0]}</span>
          <span><strong>Release: </strong>{book.year}</span>
          <span><strong>Rating: </strong>{book.rating}</span>
        </div>
      </div>
    </li>
  )
}
