import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setStartIndex } from '../../redux/actions/booksActions';
import BookComponent from '../BookComponent/BookComponent';
import { Request } from '../../shared/interfaces';
import './BookListing.scss';

const BookListing = () => {
  const [countIndex, setCountIndex] = useState<number>(30);
  const totalItems = useSelector((state: any) => {
    return state.allBooks.books.totalItems;
  });
  const dispatch = useDispatch();

  const {
    searchValue,
    category,
    startIndex,
    orderBy,
  } = useSelector((state: any) => {
    const request: Request = {
      searchValue: '',
      category: 'all',
      startIndex: '0',
      orderBy: 'relevance',
    };

    request.searchValue = state.searchValue;
    request.category = state.category;
    request.startIndex = state.startIndex;
    request.orderBy = state.orderBy;
    return request;
  });

  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}:${category === 'all' ? '' : category}&startIndex=${startIndex}&maxResults=30&orderBy=${orderBy}`,
    ).catch((err) => {
      throw new Error(err);
    });
    const data = await response.json();
    dispatch(setBooks(data));
  };

  const countHandler = () => {
    setCountIndex((prevCount) => {
      return prevCount + 30;
    });
    dispatch(setStartIndex(String(countIndex)));
    getBooks();
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
