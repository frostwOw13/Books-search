import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countCurrentPage } from '../../redux/actions/booksActions';
import BookComponent from '../BookComponent/BookComponent';
import './BookListing.scss';

const BookListing = () => {
  const [pageCount, setPageCount] = useState<number>(30);
  const totalItems = useSelector((state: any) => {
    return state.allBooks.books.totalItems;
  });
  const dispatch = useDispatch();

  const countHandler = () => {
    setPageCount((prevCount) => {
      return prevCount + 30;
    });
    dispatch(countCurrentPage(pageCount));
  };

  return (
    <div className="book-list__wrapper">
      {totalItems ? (
        <h2 className="book-list__result">{`Found ${totalItems} items`}</h2>
      ) : (
        ''
      )}
      <div className="book-list">
        <BookComponent />
      </div>
      {totalItems ? <button className="book-list__btn" onClick={countHandler}>Load more</button> : ''}
    </div>
  );
};

export default BookListing;
