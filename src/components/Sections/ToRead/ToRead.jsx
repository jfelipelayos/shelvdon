import React, {useContext} from 'react'
import './ToRead'
import { GlobalContext } from '../../../context/GlobalState'
import AlphabetMenu from '../../AlphabetMenu/AlphabetMenu'
import { BookFinishedCard } from '../../BookFinishedCard/BookFinishedCard'

export const ToRead = () => {
  const { toread } = useContext(GlobalContext)

  console.log(toread);
  return (
    <div>
      <h2 style={{margin:'0 1.5rem', marginTop:'1rem'}}>Books to read</h2>
      <AlphabetMenu/>
      <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center" style={{marginTop:'20%'}}>
        {toread.length > 0 ? (
          <ul>
            {toread.map((book) => (
              <BookFinishedCard book={book} />
            ))}
          </ul>
        ) : (<h2>Empty List</h2>)}
      </div>
      <ul style={{marginTop:'10%'}}>
        {toread.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>
      {/*<article id='A' style={{marginTop: '8%'}}>A</article>*/}

    </div>
  )
}
