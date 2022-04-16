import React from 'react';
import './BookFinishedCard.css';

import InfoButtonsFinished from '../InfoButtons/InfoButtonsFinished';
import InfoButtonsFavorites from '../InfoButtons/InfoButtonsFavorites';
import InfoButtonsToRead from '../InfoButtons/InfoButtonsToRead';

export const BookFinishedCard = ({ book, currentView }) => {
  return (
    <li key={book.book_id} className="book-card">
      <div className="book-card-header">
        <img src={book.cover} alt="Movie cover" className="book-card-img" />
        <div className="book-card-title">
          <h2>{book.name}</h2>
        </div>
        {currentView === 'favorites' ? (
          <InfoButtonsFavorites book={book} />
        ) : currentView === 'toread' ? (
          <InfoButtonsToRead book={book} />
        ) : currentView === 'finished' ? (
          <InfoButtonsFinished book={book} />
        ) : (
          <p>Nothing</p>
        )}
      </div>
      <div className="book-card-info">
        <div className="info-details">
          {book.authors ? (
            <span>
              <strong>Author: </strong>
              {book.authors[0]}
            </span>
          ) : book.author ? (
            <span>
              <strong>Author: </strong>
              {book.author}
            </span>
          ) : null}
          {book.year && (
            <span>
              <strong>Release: </strong>
              {book.year}
            </span>
          )}
          {book.rating && (
            <span>
              <strong>Rating: </strong>
              {book.rating}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};
