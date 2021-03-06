import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setBooks,
  setCategory,
  setOrderBy,
  setSearchValue,
} from '../../redux/actions/booksActions';
import genres from '../../shared/booksGenres';
import { Request } from '../../shared/interfaces';
import './Header.scss';

const Header: React.FC = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    searchValue,
    category,
    startIndex,
    orderBy,
  } = useSelector<Request, Request>((state) => {
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

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setSearchBarValue('');
    getBooks();
    history.push('/');
  };

  const searchHadler = (event: React.ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    setSearchBarValue(element.value);
    dispatch(setSearchValue(element.value));
  };

  const sortHandler = (event: React.ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    dispatch(setOrderBy(element.value));
  };

  const categoryHandler = (event: React.ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    dispatch(setCategory(element.value));
  };

  return (
    <header className="header">
      <h1 className="title">Search for books</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form__search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchBarValue}
            onChange={searchHadler}
          />
          <button className="icon" type="submit">
            <div className="icon__image" />
          </button>
        </div>

        <div className="form__options">
          <label htmlFor="category">
            Categories
            <select id="category" className="select" onChange={categoryHandler}>
              {genres.map((genre: string) => {
                return (<option>{genre}</option>);
              })}
            </select>
          </label>
          <label htmlFor="sortby">
            Sorting by
            <select id="sortby" className="select" onChange={sortHandler}>
              <option>relevance</option>
              <option>newest</option>
            </select>
          </label>
        </div>
      </form>
    </header>
  );
};

export default Header;
