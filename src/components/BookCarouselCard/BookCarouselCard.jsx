import React, { useContext } from 'react';

//@vendor

//@context
import { GlobalContext } from '../../context/GlobalState';

//@component
import BookShouldBeDisabled from '../../helper/BookShouldBeDisabled';

export const BookCarouselCard = ({ book }) => {
  const { favorite, addBookToFavorites, toread, addBookToToRead } =
    useContext(GlobalContext);

  return (
    <div
      key={book.book_id}
      // className="card m-auto"
      // style={{ width: '16rem', height: 'auto' }}
      // style={{ width: '100%' }}
    >
      <img
        src={book.cover}
        // style={{ width: 'auto', height: '16rem' }}
        style={{ width: '100%' }}
        // style={{ width: '300px' }}
        alt="..."
      />
      {/* <div className="card-body"> */}
      <div >
        <h5 className="card-title">{book.winning_category}</h5>
        <p className="card-text text-truncate">{book.name}</p>
      </div>
      <div className="card-footer text-center py-2">
        <button
          disabled={BookShouldBeDisabled(book, favorite)}
          className={
            BookShouldBeDisabled(book, favorite)
              ? 'btn btn-outline-secondary my-1 btn-sm'
              : 'btn btn-outline-primary my-1 btn-sm'
          }
          onClick={() => addBookToFavorites(book)}
        >
          Add to Favorites
        </button>
        <button
          disabled={BookShouldBeDisabled(book, toread)}
          className={
            BookShouldBeDisabled(book, toread)
              ? 'btn btn-outline-secondary my-1 btn-sm'
              : 'btn btn-outline-primary my-1 btn-sm'
          }
          onClick={() => addBookToToRead(book)}
        >
          Add to ToRead
        </button>
      </div>
    </div>
  );
};
