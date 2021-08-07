import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setStartIndex } from '../../redux/actions/booksActions';
import BookComponent from '../BookComponent/BookComponent';
import { Request } from '../../shared/interfaces';
import './BookListing.scss';
import { NUMBER_OF_MAX_COMPONENTS_ON_PAGE } from '../../shared/constants';

const BookListing = () => {
  const [countIndex, setCountIndex] = useState<number>(NUMBER_OF_MAX_COMPONENTS_ON_PAGE);
  const totalItems = useSelector<any, string>((state) => {
    return state.allBooks.books.totalItems;
  });
  const dispatch = useDispatch();

  const response = useSelector<Request, Request>((state) => {
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

  const {
    searchValue,
    category,
    startIndex,
    orderBy,
  } = response;

  const getBooks = async () => {
    const responseAPI = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}:${category === 'all' ? '' : category}&startIndex=${startIndex}&maxResults=30&orderBy=${orderBy}`,
    ).catch((err) => {
      throw new Error(err);
    });
    const data = await responseAPI.json();
    dispatch(setBooks(data));
  };

  const countHandler = () => {
    setCountIndex((prevCount) => {
      return prevCount + NUMBER_OF_MAX_COMPONENTS_ON_PAGE;
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
