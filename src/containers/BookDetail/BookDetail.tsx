import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './BookDetail.scss';

const BookDetail = () => {
  const { bookId }: any = useParams();
  const currentBook = useSelector((state: any) => {
    return state.allBooks.books.items[bookId];
  });
  const bookInfo = currentBook.volumeInfo;

  return (
    <div className="book__wrapper">
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
  );
};

export default BookDetail;
