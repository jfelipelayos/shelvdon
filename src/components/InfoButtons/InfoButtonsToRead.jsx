import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import BookShouldBeDisabled from '../../helper/BookShouldBeDisabled'



function InfoButtonsToRead({book}) {
  const { removeBookFromToRead, addBookToFinished, finished } = useContext(GlobalContext)

  const handleAddBtn = (book) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${book.name} added to favorites`,
      showConfirmButton: false,
      timer: 1500
    })
    addBookToFinished(book)
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
        removeBookFromToRead(book)
      }
    })
  }

  return (
    <div className="info-buttons-finished">
          <button disabled={BookShouldBeDisabled(book, finished)} onClick={() => {handleAddBtn(book)}}><FontAwesomeIcon icon={faCircleCheck} /></button>
          <button className='btns' data-hover="Remove from list" onClick={() => { handleDeleteBtn(book) }}><FontAwesomeIcon icon={faTrash} /></button>
          <button>
            <a href={book.url} className='link' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlus} /></a>
          </button>
    </div>
  )
}

export default InfoButtonsToRead