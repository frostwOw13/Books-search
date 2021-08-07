import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../shared/interfaces';
import './BookDetail.scss';

const BookDetail = () => {
  const { bookId } = useParams<RouteParams>();
  const currentBook = useSelector((state: any) => {
    if (state.allBooks.books?.items) return state.allBooks.books.items[bookId];
    return undefined;
  });
  const bookInfo = currentBook?.volumeInfo;

  return (
    <div className="book__wrapper">
      {bookInfo === undefined ? (
        <h1 className="error">Please, type your book query</h1>
      ) : (
        <div className="book__container">
          <div className="book__image-wrapper">
            <img
              className="book__image"
              src={bookInfo?.imageLinks.thumbnail}
              alt={bookInfo?.title ? bookInfo?.title : ''}
            />
          </div>
          <div className="book__description">
            <div className="book__category">{bookInfo?.categories}</div>
            <p className="book__title">{bookInfo?.title}</p>
            <p className="book__author">{bookInfo?.authors?.join(', ')}</p>
            <p className="book__spec">{bookInfo?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
