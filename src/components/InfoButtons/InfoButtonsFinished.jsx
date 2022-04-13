import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import BookShouldBeDisabled from '../../helper/BookShouldBeDisabled'



function InfoButtonsFinished({book}) {
  const { removeBookFromFinished, addBookToFavorites, finished } = useContext(GlobalContext)

  const handleAddBtn = (book) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${book.name} added to favorites`,
      showConfirmButton: false,
      timer: 1500
    })

    if (BookShouldBeDisabled(book, finished)) {
      addBookToFavorites(book)
    }
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
    <div className="info-buttons-finished">
          <button className='btns' data-hover="Add to favorites" onClick={() => { handleAddBtn(book) }}><FontAwesomeIcon icon={faHeart} /></button>
          <button className='btns' data-hover="Remove from list" onClick={() => { handleDeleteBtn(book) }}><FontAwesomeIcon icon={faTrash} /></button>
          <button
            onClick={() => { removeBookFromFinished(book) }}>
            <a href={book.url} className='link' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlus} /></a>
          </button>
    </div>
  )
}

export default InfoButtonsFinished