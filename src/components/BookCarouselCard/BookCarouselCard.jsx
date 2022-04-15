import React, { useContext } from 'react';

//@vendor

//@context
import { GlobalContext } from '../../context/GlobalState';

//@component
import BookShouldBeDisabled from '../../helper/BookShouldBeDisabled';

export const BookCarouselCard = ({ book, title }) => {
  const { favorites, addBookToFavorites, toread, addBookToToRead } =
    useContext(GlobalContext);

  return (
    <div className="card m-2 shadow-sm" style={{ height: '28rem' }}>
      <img
        src={book.cover}
        style={{ width: '100%', height: '12rem' }}
        alt="..."
      />
      <div className="card-body">
        <h5
          className=" fs-6 text-uppercase text-center mb-2"
          style={{ height: 'auto' }}
        >
          {book[title]}
        </h5>
        <p className="card-text fs-6 text-center " style={{ height: 'auto' }}>
          {book.name.length > 40 ? book.name.slice(0, 40) + '...' : book.name}
        </p>
      </div>
      <div className="text-center py-2">
        <button
          disabled={BookShouldBeDisabled(book, favorites)}
          className={
            BookShouldBeDisabled(book, favorites)
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
