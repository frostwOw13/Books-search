import React from 'react';
import BookComponent from '../BookComponent/BookComponent';
import './BookListing.scss';

const BookListing = () => {
  return (
    <div className="book-list">
      <BookComponent />
    </div>
  );
};

export default BookListing;
